function FunctionCard({ title, showMessage }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={showMessage}>
        Click Me
      </button>
    </div>
  );
}

export default FunctionCard;