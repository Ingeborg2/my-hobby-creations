import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const location = useLocation();

  const navItems = [
    { path: '/polymer-clay', label: 'Polymeer klei' },
    { path: '/amigurumi', label: 'Amigurumi' },
    { path: '/aquarel', label: 'Aquarel' },
    { path: '/greeting-cards', label: 'Wenskaarten' }
  ];

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `hover:opacity-75 px-3 py-2 transition-all duration-300 ${
      isActive ? 'font-semibold' : ''
    }`;
  };

  const getMobileLinkClasses = (path) => {
    const isActive = location.pathname === path;
    return `hover:opacity-75 w-full text-center py-6 transition-all duration-300 ${
      isActive ? 'font-semibold' : ''
    }`;
  };

  return (
    <>
      {/* Top Nav */}
      <section>
        <nav className="flex items-center justify-between bg-primary text-white py-4 px-6 h-[75px] max-w-full">
          {/* Title */}
          <span className="font-kaushan text-2xl sm:text-2xl md:text-3xl">
            <Link to="/" className="hover:opacity-90">Mijn hobby creaties</Link>
          </span>

          {/* Hamburger button */}
          <button
            id="hamburger-button"
            className="z-[60] w-8 h-6 sm:hidden focus:outline-none relative"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`absolute w-8 h-[3px] bg-white rounded transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen 
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-45" 
                  : "top-0 left-0"
              }`}
            ></span>
            <span
              className={`absolute w-8 h-[3px] bg-white rounded transition-all duration-300 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center ${
                mobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute w-8 h-[3px] bg-white rounded transition-all duration-300 ease-in-out origin-center ${
                mobileMenuOpen 
                  ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45" 
                  : "bottom-0 left-0"
              }`}
            ></span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden sm:flex font-roboto text-xl space-x-2">
            {navItems.map(({ path, label }) => (
              <Link key={path} to={path} className={getLinkClasses(path)}>
                {label}
              </Link>
            ))}
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
            {navItems.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                onClick={toggleMenu}
                className={getMobileLinkClasses(path)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </section>
      )}
    </>
  );
}