import Banner from "./components/Banner";

function App() {
  const arr: string[] = ["Text 1", "Text 2", "Text 3"];
  return (
    <>
      <div>
        <Banner
          // text="hello there"
          animation="carousel"
          textStyles="font-bold"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          // duration={6}
          closeIconVisible={true}
        >
          <p>Hello there!</p>
        </Banner>
        <p>hello there</p>

        <Banner
          // textArray={arr}
          animation="carousel"
          textStyles="font-bold mx-10"
          closeIconVisible={true}
          duration={6}
        >
          <>
            {arr.map((item, index) => (
              <p key={index} className="text-white">
                {" "}
                {item}
              </p>
            ))}
          </>
        </Banner>
        <p>hello there</p>
        <Banner
          // text="Hello there"
          duration={1.5}
          animation="verticalCarousel"
          textStyles="font-bold"
        >
          <p className="text-white">Hello there!</p>
        </Banner>
        <p>hello there</p>
        <Banner
          // textArray={arr}
          duration={2}
          animation="verticalCarousel"
          textStyles="font-bold mx-10"
        >
          <p className="text-white">Hello there!</p>
        </Banner>

        <Banner
          // text="hello there"
          textStyles="font-bold"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          closeIconVisible={true}
        >
          <>
            <p>Hello there!</p>
            <button className="p-3 w-max text-white bg-black rounded-2xl mx-3">
              Click me
            </button>
            <p>Hello there!</p>
          </>
        </Banner>
      </div>
    </>
  );
}

export default App;
