function Card(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <h3>Price: {props.price}</h3>
      <h4>Status: {props.isAvailable ? "Available" : "Not Available"}</h4>
    </div>
  );
}

export default Card;