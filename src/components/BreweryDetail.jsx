import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./BreweryDetail.css";

const BreweryDetail = () => {
  let params = useParams();
  const [fullDetails, setFullDetails] = useState(null);

  const callAPI = async () => {
    // const query = `https://api.openbrewerydb.org/v1/breweries?by_city=${city}`;
    const query = `https://api.openbrewerydb.org/v1/breweries?per_page=200`;
    const response = await axios.get(query);
    const brewery = response.data.find((brewery) => {
      return brewery.id === params.breweryId;
    });
    setFullDetails(brewery);
  };

  useEffect(() => {
    callAPI();
  }, []);

  return (
    fullDetails && (
      <div className="BreweryDetail">
        <h1>{fullDetails.name}</h1>
        <p>Brewery type: {fullDetails.brewery_type}</p>
        <p>
          Address: {fullDetails.street}, {fullDetails.city}, {fullDetails.state}
        </p>
        <p>{fullDetails.postal_code}</p>
        <p>{fullDetails.country}</p>
        <p>Phone: {fullDetails.phone}</p>
        <p>{fullDetails.website_url}</p>
      </div>
    )
  );
};

export default BreweryDetail;
