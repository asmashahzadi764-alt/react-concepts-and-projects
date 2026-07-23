function Card(props) {
  return (
    <div className="card">
      <h2>{props.course.title}</h2>
      <p>{props.course.description}</p>
      <h3>Price: ${props.course.price}</h3>
      <h4>Status:{" "}
        {props.course.isAvailable
          ? "Available"
          : "Not Available"}</h4>
    </div>
  );
}

export default Card;