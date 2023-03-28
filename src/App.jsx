import "./App.css";
import axios from "axios";
import BreweryList from "./components/BreweryList";
import { useEffect, useState } from "react";

function App() {
  const [breweries, setBreweries] = useState(null);
  // const [city, setCity] = useState("new_york");

  const callAPI = async () => {
    // const query = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}`;
    const query = `https://api.openbrewerydb.org/v1/breweries?per_page=50`;
    const response = await axios.get(query);
    setBreweries(response.data);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    <div className="App">
      {/* <h1>Breweries in {city}</h1> */}
      <h1>Breweries</h1>
      {breweries && <BreweryList breweries={breweries} />}
    </div>
  );
}

export default App;
