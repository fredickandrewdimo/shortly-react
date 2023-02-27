import Shortener from "./Shortener";
import Statistics from "./Statistics";

const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <Shortener />
      <Statistics />
    </div>
  );
};

export default Home;
