import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Gallery from "./components/Gallery";

export default function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/polymerClay">Polymer Clay</Link></li>
          <li><Link to="/amigurumi">Amigurumi</Link></li>
          <li><Link to="/aquarel">Aquarel</Link></li>
          <li><Link to="/wenskaarten">Wenskaarten</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/polymerClay" element={<Gallery category="polymerClay" />} />
        <Route path="/amigurumi" element={<Gallery category="amigurumi" />} />
        <Route path="/aquarel" element={<Gallery category="aquarel" />} />
        <Route path="/wenskaarten" element={<Gallery category="wenskaarten" />} />
        <Route path="/" element={<h1>Welcome to My Hobby Creations!</h1>} />
      </Routes>
    </Router>
  );
}

