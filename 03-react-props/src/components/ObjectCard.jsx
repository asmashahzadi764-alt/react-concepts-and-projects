function ObjectCard({ course }) {
  return (
    <div className="card">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <h3>Price: {course.price}</h3>
      <h4>
        Status: {course.isAvailable ? "Available" : "Not Available"}
      </h4>
    </div>
  );
}

export default ObjectCard;