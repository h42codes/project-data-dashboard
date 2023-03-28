import "./App.css";
import axios from "axios";
import BreweryList from "./components/BreweryList";
import { useEffect, useState } from "react";

function App() {
  const [breweries, setBreweries] = useState(null);
  // const [city, setCity] = useState("new_york");
  const [filteredBreweries, setFilteredBreweries] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const callAPI = async () => {
    // const query = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}`;
    const query = `https://api.openbrewerydb.org/v1/breweries`;
    const response = await axios.get(query);
    setBreweries(response.data);
  };

  useEffect(() => {
    callAPI();
  }, []);

  const handleSearch = () => {
    const filteredBreweries = breweries.filter((brewery) => {
      return brewery.name.toLowerCase().includes(searchInput.toLowerCase());
    });
    setBreweries(filteredBreweries);
  };

  const searchBreweries = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredBreweries = breweries.filter((brewery) => {
        return brewery.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredBreweries(filteredBreweries);
    } else {
      setFilteredBreweries(breweries);
    }
  };

  return (
    <div className="App">
      {/* <h1>Breweries in {city}</h1> */}
      <h1>Breweries</h1>
      <input
        type="text"
        value={searchInput}
        onChange={(inputString) => searchBreweries(inputString.target.value)}
      />
      {/* <button onClick={handleSearch}>Search</button> */}
      {/* {breweries && <BreweryList breweries={breweries} />} */}
      {searchInput.length > 0 ? (
        <BreweryList breweries={filteredBreweries} />
      ) : (
        breweries && <BreweryList breweries={breweries} />
      )}
    </div>
  );
}

export default App;
