import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Blog from "./pages/Blog";
import About from "./pages/About";
import BrindMind from "./pages/BrindMind";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Navbar />

      <div className="flex flex-col min-h-screen w-full">
        {/* Routes principales */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/About" element={<About />} />
            <Route path="/Brindmind" element={<BrindMind />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
