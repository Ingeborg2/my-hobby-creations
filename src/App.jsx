import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="bg-red-500 text-white p-4">
    <Navbar></Navbar>
    <h1>Welcome to My Hobby Creations!</h1>
    <Router>
      <Routes>
        <Route path="/polymerClay" element={<Gallery category="polymeer klei" />} />
        <Route path="/amigurumi" element={<Gallery category="amigurumi" />} />
        <Route path="/aquarel" element={<Gallery category="aquarel" />} />
        <Route path="/greeting-cards" element={<Gallery category="wenskaarten" />} />
        <Route path="/" element={<h1>Welcome to My Hobby Creations!</h1>} />
      </Routes>
    </Router>
    </div>
          
  );
}

