function ArrayCard({ title, skills }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <h3>Skills:</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayCard;