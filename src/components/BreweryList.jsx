import BreweryCard from "./BreweryCard";
import "./BreweryList.css";

const BreweryList = ({ breweries }) => {
  const mostFrequentType = () => {
    let types = {};
    breweries.forEach((b) => {
      if (types[b.brewery_type]) {
        types[b.brewery_type] += 1;
      } else {
        types[b.brewery_type] = 1;
      }
    });
    let max = 0;
    let maxType = "";
    for (let type in types) {
      if (types[type] > max) {
        max = types[type];
        maxType = type;
      }
    }
    return maxType;
  };

  return (
    <div className="BreweryList">
      <div className="brewery-stats">
        <p>Found {breweries && breweries.length} breweries</p>
        <p>
          {breweries.filter((b) => b.brewery_type == "closed").length} are
          closed
        </p>
        {/* <p>
          {breweries.filter((b) => b.brewery_type == "micro").length} micro
          breweries
        </p> */}
        <p>
          {mostFrequentType()} brewries are the most common type (
          {breweries.filter((b) => b.brewery_type == "micro").length} total) of
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
