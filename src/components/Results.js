import React from "react";

const Results = ({ open }) => {
  const openResults = () => {
    if (open) {
      return (
        <>
          <div className="title">
            <p>正解回数： 2</p>
          </div>
          <div className="resultsContainer">
            <div className="correctResults">
              <div className="row">
                <p>react</p>
              </div>
            </div>
            <div className="wrongResults">
              <div className="row">
                <p>html</p>
              </div>
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
