import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Blog from "./pages/Blog"
import About from "./pages/About"
import BrindMind from "./pages/BrindMind"

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-20 px-6">
        <Routes>
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Brindmind" element={<BrindMind />} />
        </Routes>
      </div>
    </Router>
  )
}
