import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btn, setBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Determine if we are on the home page
  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`absolute w-full p-4 shadow-lg flex justify-between items-center z-50 ${
        isHomePage
          ? isMenuOpen
            ? 'bg-gray-900 lg:bg-transparent xl:bg-transparent'
            : 'bg-transparent'
          : 'bg-yellow-600 text-brown-900'
      }`}
    >
      {/* Logo on the left */}
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full"
          src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
          alt="Logo"
        />
      </div>

      {/* Toggle button on the right */}
      <div className="lg:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <p className="font-bold px-2 text-xl">{isMenuOpen ? "X" : "☰"}</p>
        </button>
      </div>

      {/* Menu items */}
      <div
        className={`lg:flex lg:items-center lg:justify-end ${
          isMenuOpen ? "block" : "hidden"
        } lg:flex-row p-4 lg:mt-0 lg:p-0 absolute lg:relative top-full left-0 w-full lg:w-auto ${
          isHomePage ? 'bg-gray-900 lg:bg-transparent' : 'bg-yellow-600 text-brown-900'
        }`}
      >
        <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-4 items-center justify-between">
          <li className="w-32 text-center">
            <Link
              className={`hover:underline font-semibold text-lg ${
                isHomePage ? 'text-white' : 'text-orange-900'
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="w-32 text-center">
            <Link
              className={`hover:underline font-semibold text-lg ${
                isHomePage ? 'text-white' : 'text-orange-900'
              }`}
              to="/About"
            >
              About
            </Link>
          </li>
          <li className="w-32 text-center">
            <Link
              className={`hover:underline font-semibold text-lg ${
                isHomePage ? 'text-white' : 'text-orange-900'
              }`}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
          <li className="w-32 text-center">
            <Link
              className={`hover:underline font-semibold text-lg ${
                isHomePage ? 'text-white' : 'text-orange-900'
              }`}
              to="/"
            >
              Help
            </Link>
          </li>
          <li className="w-32 text-center font-semibold text-lg">
            <button
              className={`px-4 py-2 ${
                isHomePage ? 'bg-white text-gray-700 hover:bg-gray-400' : 'text-orange-900 hover:bg-gray-200'
              } transition lg:ml-4 mt-2 lg:mt-0`}
              onClick={() => {
                setBtn(btn === "Login" ? "Logout" : "Login");
              }}
            >
              {btn}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
