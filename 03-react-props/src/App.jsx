import Card from "./components/Card";
import ObjectCard from "./components/ObjectCard";
import ArrayCard from "./components/ArrayCard";

function App() {
  const htmlCourse = {
    title: "HTML",
    description: "HTML is used to structure web pages.",
    price: 20,
    isAvailable: true,
  };

  const cssCourse = {
    title: "CSS",
    description: "CSS is used to style web pages.",
    price: 30,
    isAvailable: false,
  };

  const jsCourse = {
    title: "JavaScript",
    description: "JavaScript adds interactivity to web pages.",
    price: 40,
    isAvailable: true,
  };

  return (
    <>
      <h1>String, Number & Boolean Props</h1>

      <Card
        title="HTML"
        description="HTML is used to structure web pages."
        price={20}
        isAvailable={true}
      />

      <Card
        title="CSS"
        description="CSS is used to style web pages."
        price={30}
        isAvailable={false}
      />

      <Card
        title="JavaScript"
        description="JavaScript adds interactivity to web pages."
        price={40}
        isAvailable={true}
      />

      <hr />

      <h1>Object Props</h1>

      <ObjectCard course={htmlCourse} />
      <ObjectCard course={cssCourse} />
      <ObjectCard course={jsCourse} />

      <h1>Array Props</h1>

        <ArrayCard
        title="Frontend Skills"
        skills={["HTML", "CSS", "JavaScript", "React"]}
        />

        <ArrayCard
        title="Backend Skills"
        skills={["Node.js", "Express.js", "MongoDB"]}
        />
    </>
  );
}

export default App;