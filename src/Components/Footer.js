import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="flex items-center mb-6 md:mb-0">
            <img
              className="h-16 w-16 rounded-full"
              src="https://png.pngtree.com/template/20200704/ourmid/pngtree-restaurant-logo-design-vector-template-image_388753.jpg"
              alt="Logo"
            />
            <div className="ml-4">
              <h2 className="text-xl font-bold">Our Restaurant</h2>
              <p className="text-sm text-gray-400">
                Bringing you the best food from the best chefs in town.
              </p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:space-x-8">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link className="hover:text-yellow-500 transition" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-yellow-500 transition" to="/about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-yellow-500 transition" to="/menu">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link className="hover:text-yellow-500 transition" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    className="hover:text-yellow-500 transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-yellow-500 transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-yellow-500 transition"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Our Restaurant. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
