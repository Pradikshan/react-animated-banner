import Banner from "./components/Banner";

function App() {
  const arr: string[] = ["Text 1", "Text 2", "Text 3"];
  return (
    <>
      <div>
        <Banner
          text="hello there"
          animation="carousel"
          textStyles="font-bold"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          duration={15}
          closeIconVisible={true}
        />
        <p>hello there</p>
        <Banner
          textArray={arr}
          animation="carousel"
          textStyles="font-bold mx-10"
          closeIconVisible={true}
        />
        <p>hello there</p>
        <Banner
          text="Hello there"
          duration={1.5}
          animation="verticalCarousel"
          textStyles="font-bold text-center"
        />
        <p>hello there</p>
        <Banner
          textArray={arr}
          duration={2}
          animation="verticalCarousel"
          textStyles="font-bold mx-10"
        />
      </div>
    </>
  );
}

export default App;
