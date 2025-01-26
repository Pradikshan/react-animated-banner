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
          // duration={6}
          closeIconVisible={true}
        />
        <p>hello there</p>
        <Banner
          textArray={arr}
          animation="carousel"
          textStyles="font-bold mx-10"
          closeIconVisible={true}
          duration={3}
        />
        <p>hello there</p>
        <Banner
          text="Hello there"
          duration={1.5}
          animation="verticalCarousel"
          textStyles="font-bold"
        />
        <p>hello there</p>
        <Banner
          textArray={arr}
          duration={2}
          animation="verticalCarousel"
          textStyles="font-bold mx-10"
        />

        <Banner
          text="hello there"
          textStyles="font-bold"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          closeIconVisible={true}
        >
          <button className="p-3 w-max text-white bg-black rounded-2xl mx-3">
            Click me
          </button>
        </Banner>
      </div>
    </>
  );
}

export default App;
