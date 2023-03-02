import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Statistics from "./components/Statistics";
import NotFound from "./components/NotFound";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
                <Statistics />
                <Banner />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
