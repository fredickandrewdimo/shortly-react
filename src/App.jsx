import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="content">
      <Navbar />
      <div>
        <Home />
        <Statistics />
      </div>
      <Footer />
    </div>
  );
}

export default App;
