import "./App.css";
import CharacterList from "./components/CharacterList";

function App() {
  return (
    <div className="bg-success bg-opacity-50 text-dark">
      <h1 className="text-center fw-bold display-1 py-2">Rick and Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
