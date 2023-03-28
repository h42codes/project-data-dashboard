import "./Card.css";

const Card = ({ day }) => {
  return (
    <div className="Card">
      <p>{day.datetime}</p>
      <p>{day.weather.description}</p>
      <p>
        {day.app_min_temp}° - {day.app_max_temp}°C
      </p>
    </div>
  );
};

export default Card;
