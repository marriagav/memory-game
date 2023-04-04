import React from "react";

interface DisplayScoreProps {
  scoreName: string;
  scoreNumber: number;
  className: string;
}

function DisplayScore(props: DisplayScoreProps) {
  return (
    <div className={props.className}>
      <h2 className="scoreText">
        {props.scoreName}: {props.scoreNumber}
      </h2>
    </div>
  );
}

export default DisplayScore;
