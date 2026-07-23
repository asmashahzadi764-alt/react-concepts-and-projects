import Card from "./components/Card";

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
      <Card course={htmlCourse} />
      <Card course={cssCourse} />
      <Card course={jsCourse} />
    </>
  );
}

export default App;