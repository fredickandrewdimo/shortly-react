import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="content">
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
