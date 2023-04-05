import React from "react";
import "./DisplayScore.css";

interface DisplayScoreProps {
  scoreName: string;
  scoreNumber: number;
  className: string;
  id: string;
}

function DisplayScore(props: DisplayScoreProps) {
  return (
    <div className={props.className} id={props.id}>
      <h2 className="scoreText">
        {props.scoreName}: {props.scoreNumber}
      </h2>
    </div>
  );
}

export default DisplayScore;
