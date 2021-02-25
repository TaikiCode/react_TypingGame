import {useState} from 'react'
import "./App.css";
import Container from "./components/Container";
import { words } from "./data/Words";
import TypeBox from "./components/TypeBox";
import Results from "./components/Results";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons";

function App() {

  const [open, setOpen] = useState(false)

  const openResultsArea = () => {
    if (!open) {
      document.getElementById("results").classList.remove('resultsClose');
      document.getElementById("results").classList.add('resultsOpen');
      setOpen(!open)
    }
  }
  const closeResultsArea = () => {
    if (open) {
      document.getElementById("results").classList.remove('resultsOpen');
      document.getElementById("results").classList.add('resultsClose');
      setOpen(!open)
    }
  }


  return (
    <div className="App">
      <Container>
        <TypeBox />
      </Container>
      <div className="icon">
        <FontAwesomeIcon icon={faAngleDoubleLeft} onClick={open ? closeResultsArea : openResultsArea} />
      </div>
      <Results open={open} />
    </div>
  );
}

export default App;
