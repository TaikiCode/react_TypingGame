import React from "react";

const Results = (props) => {
  const { open, correctResults, wrongResults, countCorrect } = props;
  const openResults = () => {
    if (open) {
      return (
        <>
          <div className="title">
            <p>正答数： {countCorrect}</p>
          </div>
          <div className="resultsContainer">
            <div className="correctResults">
              {correctResults.map((correctWord, index) => {
                return (
                  <div key={index} className="row">
                    <p>{correctWord}</p>
                  </div>
                );
              })}
            </div>
            <div className="wrongResults">
              {wrongResults.map((wrongWord, index) => {
                return (
                  <div key={index} className="row">
                    <p>{wrongWord}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }
  };
  return (
    <div className="results" id="results">
      {openResults()}
    </div>
  );
};

export default Results;
