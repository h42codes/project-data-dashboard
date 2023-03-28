import "./App.css";
import axios from "axios";
import BreweryList from "./components/BreweryList";
import { useEffect, useState } from "react";

function App() {
  const [breweries, setBreweries] = useState(null);
  const [state, setState] = useState("");
  const [filteredBreweries, setFilteredBreweries] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const callAPI = async () => {
    // const query = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}`;
    const query = `https://api.openbrewerydb.org/v1/breweries?per_page=200`;
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

  // const searchBreweries = (searchValue) => {
  //   setSearchInput(searchValue);
  //   if (searchValue !== "") {
  //     if (state) {
  //       const searchResult = filteredBreweries.filter((brewery) => {
  //         return brewery.name.toLowerCase().includes(searchValue.toLowerCase());
  //       });
  //       setFilteredBreweries(searchResult);
  //     } else {
  //       const searchResult = breweries.filter((brewery) => {
  //         return brewery.name.toLowerCase().includes(searchValue.toLowerCase());
  //       });
  //       setFilteredBreweries(searchResult);
  //     }
  //   } else {
  //     setFilteredBreweries(breweries);
  //   }
  // };

  // const searchState = (searchValue) => {
  //   setState(searchValue);
  //   if (searchValue !== "") {
  //     if (searchInput) {
  //       const searchResult = filteredBreweries.filter((brewery) => {
  //         return brewery.state_province
  //           .toLowerCase()
  //           .includes(searchValue.toLowerCase());
  //       });
  //       setFilteredBreweries(searchResult);
  //     } else {
  //       const searchResult = breweries.filter((brewery) => {
  //         return brewery.state_province
  //           .toLowerCase()
  //           .includes(searchValue.toLowerCase());
  //       });
  //       setFilteredBreweries(searchResult);
  //     }
  //   } else {
  //     setFilteredBreweries(breweries);
  //   }
  // };

  const searchBreweries = (searchValue) => {
    setSearchInput(searchValue);
    const searchResult = breweries.filter((brewery) => {
      const nameMatch = brewery.name
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      const stateMatch = brewery.state_province
        .toLowerCase()
        .includes(state.toLowerCase());
      return nameMatch && stateMatch;
    });
    setFilteredBreweries(searchResult);
  };

  const searchState = (searchValue) => {
    setState(searchValue);
    const searchResult = breweries.filter((brewery) => {
      const nameMatch = brewery.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
      const stateMatch = brewery.state_province
        .toLowerCase()
        .includes(searchValue.toLowerCase());
      return nameMatch && stateMatch;
    });
    setFilteredBreweries(searchResult);
  };

  return (
    <div className="App">
      {/* <h1>Breweries in {city}</h1> */}
      <h1>Breweries</h1>
      <input
        type="text"
        value={searchInput}
        placeholder="Search by Name"
        onChange={(inputString) => searchBreweries(inputString.target.value)}
      />
      {/* <input
        type="text"
        value={state}
        placeholder="Search by State"
        onChange={(inputString) => searchState(inputString.target.value)}
      /> */}
      {/* <button onClick={handleSearch}>Search</button> */}
      {/* {breweries && <BreweryList breweries={breweries} />} */}
      <select
        onChange={(optionString) => searchState(optionString.target.value)}
      >
        <option value="">Select a State</option>
        <option>Alabama</option>
        <option>Alaska</option>
        <option>Arizona</option>
        <option>Arkansas</option>
        <option>California</option>
        <option>Colorado</option>
        <option>Connecticut</option>
        <option>Delaware</option>
        <option>District Of Columbia</option>
        <option>Florida</option>
        <option>Georgia</option>
        <option>Hawaii</option>
        <option>Idaho</option>
        <option>Illinois</option>
        <option>Indiana</option>
        <option>Iowa</option>
        <option>Kansas</option>
        <option>Kentucky</option>
        <option>Louisiana</option>
        <option>Maine</option>
        <option>Maryland</option>
        <option>Massachusetts</option>
        <option>Michigan</option>
        <option>Minnesota</option>
        <option>Mississippi</option>
        <option>Missouri</option>
        <option>Montana</option>
        <option>Nebraska</option>
        <option>Nevada</option>
        <option>New Hampshire</option>
        <option>New Jersey</option>
        <option>New Mexico</option>
        <option>New York</option>
        <option>North Carolina</option>
        <option>North Dakota</option>
        <option>Ohio</option>
        <option>Oklahoma</option>
        <option>Oregon</option>
        <option>Pennsylvania</option>
        <option>Rhode Island</option>
        <option>South Carolina</option>
        <option>South Dakota</option>
        <option>Tennessee</option>
        <option>Texas</option>
        <option>Utah</option>
        <option>Vermont</option>
        <option>Virginia</option>
        <option>Washington</option>
        <option>West Virginia</option>
        <option>Wisconsin</option>
        <option>Wyoming</option>
      </select>
      {searchInput.length > 0 || state.length > 0 ? (
        <BreweryList breweries={filteredBreweries} />
      ) : (
        breweries && <BreweryList breweries={breweries} />
      )}
    </div>
  );
}

export default App;
