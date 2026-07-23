import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        title="HTML"
        description="HTML is used to structure web pages."
      />

      <Card
        title="CSS"
        description="CSS is used to style web pages."
      />

      <Card
        title="JavaScript"
        description="JavaScript adds interactivity to web pages."
      />
    </>
  );
}

export default App;