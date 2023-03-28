import { useEffect, useState } from "react";
import axios from "axios";
import "./List.css";
import forecastData from "./forecast.json";
import Card from "./Card";

const API_KEY = import.meta.env.VITE_APP_API_KEY;

const List = () => {
  const [forecast, setForecast] = useState(null);

  const callApi = async () => {
    const query = `https://api.weatherbit.io/v2.0/forecast/daily?city=NewYork,NY&key=${API_KEY}`;
    const response = await axios.get(query);
    setForecast(response.data);
  };

  //   callApi();
  useEffect(() => {
    setForecast(forecastData);
  }, []);

  return (
    <div className="List">
      <h1>7-day forecast</h1>
      <div className="forecast-container">
        {forecast &&
          forecast.data.map((day) => <Card day={day} key={day.datetime} />)}
      </div>
    </div>
  );
};

export default List;
