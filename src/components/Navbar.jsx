/*import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      
      <section>
        <nav className="flex items-center justify-between bg-primary text-white py-4 px-6 h-[75px]">
          
          <span className="font-kaushan text-8xl">
            Mijn hobby creaties
          </span>

          
          <button
            id="hamburger-button"
            className="flex flex-col justify-between w-8 h-6 md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

        
          <div className="hidden md:block font-roboto text-2xl space-x-8">
            <Link to="/polymer-clay" className="hover:opacity-90">
              Polymeer klei
            </Link>
            <Link to="/amigurumi" className="hover:opacity-90">
              Amigurumi
            </Link>
            <Link to="/aquarel" className="hover:opacity-90">
              Aquarel
            </Link>
            <Link to="/greeting-cards" className="hover:opacity-90">
              Wenskaarten
            </Link>
          </div>
        </nav>
      </section>

    
      {mobileMenuOpen && (
        <section
          id="mobile-menu"
          className="absolute top-0 left-0 bg-primary w-full text-5xl text-white flex flex-col justify-center origin-top animate-open-menu z-50"
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8 text-white"
            aria-label="mobile"
          >
            <Link
              to="/polymer-clay"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Polymeer klei
            </Link>
            <Link
              to="/amigurumi"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Amigurumi
            </Link>
            <Link
              to="/aquarel"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Aquarel
            </Link>
            <Link
              to="/greeting-cards"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Wenskaarten
            </Link>
          </nav>
        </section>
      )}
    </>
  );
}
*/

import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      {/* Top Nav */}
      <section>
        <nav className="flex items-center justify-between bg-primary text-white py-4 px-6 h-[75px]">
          {/* Title */}
          <span className="font-kaushan text-2xl sm:text-2xl md:text-3xl">
            Mijn hobby creaties
          </span>

          {/* Hamburger button */}
          <button
            id="hamburger-button"
            className="flex flex-col justify-between w-8 h-6 md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-1 bg-white rounded transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block font-roboto text-xl space-x-8">
            <Link to="/polymer-clay" className="hover:opacity-90">
              Polymeer klei
            </Link>
            <Link to="/amigurumi" className="hover:opacity-90">
              Amigurumi
            </Link>
            <Link to="/aquarel" className="hover:opacity-90">
              Aquarel
            </Link>
            <Link to="/greeting-cards" className="hover:opacity-90">
              Wenskaarten
            </Link>
          </div>
        </nav>
      </section>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <section
          id="mobile-menu"
          className="absolute top-0 left-0 bg-primary w-full text-3xl sm:text-4xl text-white flex flex-col justify-center origin-top animate-open-menu z-50"
        >
          <nav
            className="flex flex-col min-h-screen items-center py-8 text-white"
            aria-label="mobile"
          >
            <Link
              to="/polymer-clay"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Polymeer klei
            </Link>
            <Link
              to="/amigurumi"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Amigurumi
            </Link>
            <Link
              to="/aquarel"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Aquarel
            </Link>
            <Link
              to="/greeting-cards"
              onClick={toggleMenu}
              className="hover:opacity-75 w-full text-center py-6"
            >
              Wenskaarten
            </Link>
          </nav>
        </section>
      )}
    </>
  );
}
