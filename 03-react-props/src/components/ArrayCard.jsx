function ArrayCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <h3>Skills:</h3>
      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayCard;