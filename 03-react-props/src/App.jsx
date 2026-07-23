import Card from "./components/Card";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;