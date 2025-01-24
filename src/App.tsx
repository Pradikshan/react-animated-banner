import Banner from "./components/Banner";

function App() {
  const arr: string[] = ["Text 1", "Text 2", "Text 3"];
  return (
    <>
      <div>
        <p>hello there</p>
        <Banner text="Hello there" textArray={arr} />
      </div>
    </>
  );
}

export default App;
