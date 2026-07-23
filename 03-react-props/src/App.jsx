import Card from "./components/Card";

function App() {
  return (
    <>
      <Card
        title="HTML"
        description="HTML is used to structure web pages."
        price={20}
      />

      <Card
        title="CSS"
        description="CSS is used to style web pages."
        price={30}
      />

      <Card
        title="JavaScript"
        description="JavaScript adds interactivity to web pages."
        price={40}
      />
    </>
  );
}

export default App;