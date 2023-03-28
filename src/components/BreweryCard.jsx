import "./BreweryCard.css";

const BreweryCard = ({ brewery }) => {
  return (
    <div className="BreweryCard">
      <h3>{brewery.name}</h3>
      <button>{brewery.brewery_type}</button>
      <p>
        {brewery.city}, {brewery.state_province}
      </p>
      <p>{brewery.street}</p>
      <p>{brewery.phone}</p>
      {brewery.website_url && <a href={brewery.website_url}>Website</a>}
    </div>
  );
};

export default BreweryCard;
