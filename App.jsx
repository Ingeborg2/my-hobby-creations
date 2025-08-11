import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PolymeerKlei from "./pages/PolymeerKlei";
import Amigurumi from "./pages/Amigurumi";
import Aquarel from "./pages/Aquarel";
import Wenskaarten from "./pages/Wenskaarten";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<PolymeerKlei />} />
        <Route path="/amigurumi" element={<Amigurumi />} />
        <Route path="/aquarel" element={<Aquarel />} />
        <Route path="/wenskaarten" element={<Wenskaarten />} />
      </Routes>
    </>
  );
}
