import "./Card.scss";

const Card = (props) => {
  const { resName, cuisines, rating } = props; // destructuring
  return (
    <div className="res-card">
      <img src="https://upload.wikimedia.org/wikipedia/sco/b/bf/KFC_logo.svg" />
      <h2>{resName}</h2>
      <h5>{cuisines}</h5>
      <p>{rating}</p>
    </div>
  );
};

export default Card;
