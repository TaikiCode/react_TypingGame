import React from "react";
import Button from "./Button";

const TypeBox = (props) => {
  const {
    newWord,
    inputValue,
    setInputValue,
    time,
    disabled,
    animation,
    handleInput,
    handleStart,
  } = props;

  return (
    <div className="box">
      <div className="wordarea">
        <p>{newWord}</p>
      </div>
      <div
        className="time"
        style={{ animation: animation !== null ? animation : "" }}
      >
        <p>{time}</p>
      </div>
      <div className="inputarea">
        <input
          type="text"
          disabled={disabled && disabled}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => handleInput(e)}
          placeholder={disabled ? "" : "Start Typing...."}
        />
        <Button handleStart={handleStart} disabled={disabled} />
      </div>
    </div>
  );
};

export default TypeBox;

