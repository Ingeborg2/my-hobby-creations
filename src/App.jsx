import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="font-text-md min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/polymer-clay" replace />} />
        <Route path="/polymer-clay" element={<Gallery category="polymerClay" />} />
        <Route path="/amigurumi" element={<Gallery category="amigurumi" />} />
        <Route path="/aquarel" element={<Gallery category="aquarel" />} />
        <Route path="/greeting-cards" element={<Gallery category="greetingCards" />} />
      </Routes>
    </div>
  );
}

