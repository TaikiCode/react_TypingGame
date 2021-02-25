import { useState, useEffect } from "react";
import "./App.css";
import Container from "./components/Container";
import { words } from "./data/Words";
import TypeBox from "./components/TypeBox";
import Results from "./components/Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [newWord, setNewWord] = useState(words[0]);
  const [inputValue, setInputValue] = useState("");
  const [correctResults, setCorrectResults] = useState([]);
  const [wrongResults, setWrongResults] = useState([]);
  const [countCorrect, setCountCorrect] = useState(0);
  const [time, setTime] = useState(30);
  const [disabled, setDisabled] = useState(true);
  const [animation, setAnimation] = useState(null);
  const [open, setOpen] = useState(false);

  let randomNum = Math.floor(Math.random() * words.length); // ランダムに問題を出題

  // console.log(randomNum);

  const openResultsArea = () => {
    if (!open) {
      document.getElementById("results").classList.remove("resultsClose");
      document.getElementById("results").classList.add("resultsOpen");
      setOpen(!open);
    }
  };
  const closeResultsArea = () => {
    if (open) {
      document.getElementById("results").classList.remove("resultsOpen");
      document.getElementById("results").classList.add("resultsClose");
      setOpen(!open);
    }
  };

  const checkAnswer = () => {
    if (inputValue.trim() === newWord) {
      setCorrectResults((prevCorrect) => [...prevCorrect, newWord]); // 正解した回答を追加・保存していく
      setCountCorrect((prevCount) => prevCount + 1); // 正解数をカウントする
      return;
    }
    setWrongResults((prevWrong) => [...prevWrong, inputValue]); // 不正解の回答を追加・保存していく
  };

  const handleInput = (e) => {
    // 13: Enterキー
    if (e.charCode === 13 && inputValue.trim() !== "") {
      checkAnswer();
      setNewWord(words[randomNum]); // 次の問題をランダムに出題
      setInputValue(""); // リセット
    }
  };

  const handleStart = () => {
    setDisabled(!disabled);
    setCorrectResults([]);
    setWrongResults([]);
    setCountCorrect(0);
    setInputValue("");
  };

  useEffect(() => {
    if (time <= 30 && time !== 0 && disabled === false) {
      setTimeout(() => setTime((prevTime) => prevTime - 1), 1000); // カウントダウン
    } else if (disabled) {
      setTime(30);
      setAnimation(null);
    } else if (time === 0) {
      setDisabled(true);
    }
    if (time <= 10) {
      setAnimation("scaleNumber 2s infinite");
    }
  }, [disabled, time]);

  useEffect(() => {
    setNewWord(words[randomNum]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="App">
      <Container>
        <TypeBox
          newWord={newWord}
          inputValue={inputValue}
          setInputValue={setInputValue}
          time={time}
          disabled={disabled}
          animation={animation}
          handleInput={handleInput}
          handleStart={handleStart}
        />
      </Container>
      <div className="icon">
        {open ? (
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            onClick={closeResultsArea}
          />
        ) : (
          <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={openResultsArea} />
        )}
      </div>
      <Results
        open={open}
        correctResults={correctResults}
        wrongResults={wrongResults}
        countCorrect={countCorrect}
      />
    </div>
  );
}

export default App;
