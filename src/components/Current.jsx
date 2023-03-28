import axios from "axios";
import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;

const Current = () => {
  const [currentWeather, setCurrentWeather] = useState(null);

  const callAPI = async () => {
    const query = `https://api.weatherbit.io/v2.0/current?city=NewYork,NY&key=${API_KEY}&include=minutely`;

    const response = await axios.get(query);
    console.log(response);
    // https://api.weatherbit.io/v2.0/current?city=NewYork,NY&key=edae7b7fee7b41798999e6cde4dfe33f&include=minutely
  };

  useEffect(() => {
    // callAPI();
  }, []);

  return (
    <div className="Current">
      <h1>Current weather</h1>
      {currentWeather && <p>{currentWeather.data[0].weather.description}</p>}
    </div>
  );
};

export default Current;
