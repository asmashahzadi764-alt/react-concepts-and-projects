function FunctionCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <button onClick={props.showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default FunctionCard;