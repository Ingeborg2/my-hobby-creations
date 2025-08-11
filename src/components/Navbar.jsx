import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-purple-600 text-white py-4 px-6 h-[75px]">
      {/* Left: Logo/Title */}
      <span className="font-kaushan-script text-2xl">Mijn hobby creaties</span>
      {/* Center: Menu */}
      <div className="font-roboto text-md flex gap-4">
        <Link to="/polymer-clay" className="hover:underline">Polymeer klei</Link>
        <Link to="/amigurumi" className="hover:underline">Amigurumi</Link>
        <Link to="/aquarel" className="hover:underline">Aquarel</Link>
        <Link to="/greeting-cards" className="hover:underline">Wenskaarten</Link>
      </div>
    </nav>
  );
}
