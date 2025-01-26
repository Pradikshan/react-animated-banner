import Banner from "./components/Banner";

function App() {
  const arr: string[] = ["Text 1", "Text 2", "Text 3"];
  return (
    <>
      <div>
        <Banner
          animation="carousel"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          closeIconVisible={true}
        >
          <p>Hello there!</p>
        </Banner>
        <p>hello there</p>
        <Banner
          animation="carousel"
          direction="reverse"
          backgroundColor="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
          closeIconVisible={true}
        >
          <p>Hello there!</p>
        </Banner>
        <p>hello there</p>

        <Banner
          animation="carousel"
          closeIconVisible={true}
          animationDuration={10}
        >
          <>
            {arr.map((item, index) => (
              <p key={index} className="text-white mx-5">
                {" "}
                {item}
              </p>
            ))}
          </>
        </Banner>
        <p>hello there</p>
        <Banner animationDuration={1.5} animation="verticalCarousel">
          <p className="text-white">Hello there!</p>
        </Banner>
        <p>hello there</p>
        <Banner
          animationDuration={2}
          animation="verticalCarousel"
          direction="reverse"
        >
          <p className="text-white">Hello there!</p>
        </Banner>
        <p>Hello there</p>
        <Banner
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
        <p>Hello there</p>
      </div>
    </>
  );
}

export default App;
