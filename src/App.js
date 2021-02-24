import "./App.css";
import Container from "./components/Container";
import { words } from "./data/Words";

function App() {
  return (
    <div className="App">
      <Container>
        <h1>setup project</h1>
        <div>
          {words.map((word, index) => {
            return <p key={index}>{word}</p>;
          })}
        </div>
      </Container>
    </div>
  );
}

export default App;
