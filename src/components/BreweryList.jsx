import BreweryCard from "./BreweryCard";
import "./BreweryList.css";

const BreweryList = ({ breweries }) => {
  return (
    <div className="BreweryList">
      <div className="brewery-stats">
        <p>Found {breweries && breweries.length} breweries</p>
        <p>
          {breweries.filter((b) => b.brewery_type == "closed").length} closed
          breweries
        </p>

        <p>
          {breweries.filter((b) => b.brewery_type == "micro").length} micro
          breweries
        </p>
      </div>
      <div className="brewery-container">
        {breweries.map((brewery) => (
          <BreweryCard brewery={brewery} key={brewery.id} />
        ))}
      </div>
    </div>
  );
};

export default BreweryList;

// the mean, median, mode, or other statistic of a certain aspect of the data
// quartiles, quintiles, or ranges of the data
