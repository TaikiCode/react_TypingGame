import React from "react";
import Button from "./Button";

const TypeBox = () => {
  return (
    <div className="box">
      <div className="wordarea">
        <p>react</p>
      </div>
      <div className="time">
        <p>30</p>
      </div>
      <div className="inputarea">
        <input
          type="text"
        />
        <Button />
      </div>
    </div>
  );
};

export default TypeBox;
