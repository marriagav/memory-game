import React from "react";

interface ButtonProps {
  buttonText: string;
  onClick(event: React.MouseEvent): void;
}

function Button(props: ButtonProps) {
  return (
    <button className="simpleButton" onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}
