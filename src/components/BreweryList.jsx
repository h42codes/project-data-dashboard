import BreweryCard from "./BreweryCard";
import "./BreweryList.css";

const BreweryList = ({ breweries }) => {
  return (
    <div>
      {breweries.map((brewery) => (
        <BreweryCard brewery={brewery} key={brewery.id} />
      ))}
    </div>
  );
};

export default BreweryList;
