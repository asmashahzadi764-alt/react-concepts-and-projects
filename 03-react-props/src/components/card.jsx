function Card({ title, description, price, isAvailable }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Price: {price}</h3>
      <h4>Status: {isAvailable ? "Available" : "Not Available"}</h4>
    </div>
  );
}

export default Card;