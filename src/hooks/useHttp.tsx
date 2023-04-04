import { useState, useEffect } from "react";

interface useHttpProps {
  url: string;
  dependencies: string[];
}

export const useHttp = (props: useHttpProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.url);
      const data = await response.json();
      setFetchedData(data);
    };
    setIsLoading(true);
    console.log("Sending Http request to URL: " + props.url);
    try {
      fetchData();
    } catch (e) {
      console.error(e);
    }
  }, props.dependencies);

  return [isLoading, fetchedData];
};
