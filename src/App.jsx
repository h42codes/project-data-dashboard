import "./App.css";
import axios from "axios";
import List from "./components/List";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  return (
    <div className="App">
      <List />
    </div>
  );
}

export default App;
