import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#333" }}>
      <ul style={{
        listStyle: "none",
        display: "flex",
        gap: "1rem",
        margin: 0,
        padding: 0
      }}>
        <li><Link to="/" style={{ color: "white" }}>Polymeer Klei</Link></li>
        <li><Link to="/amigurumi" style={{ color: "white" }}>Amigurumi</Link></li>
        <li><Link to="/aquarel" style={{ color: "white" }}>Aquarel</Link></li>
        <li><Link to="/wenskaarten" style={{ color: "white" }}>Wenskaarten</Link></li>
      </ul>
    </nav>
  );
}
