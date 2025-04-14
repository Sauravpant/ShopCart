import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useState } from "react";
import { useAuth } from "../../features/auth/authHooks";
import SearchBar from "./SearchBar";
import logo from "../../assets/images/logo.png";
import useCart from "../../features/cart/cartHooks";

const Navbar = () => {
  const [lightMode, setLightMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userClicked, setUserClicked] = useState(false);
  const { auth, logOutUserAction } = useAuth();
  const { totalProducts } = useCart();
  const cartItemsCount = totalProducts;

  const handleLightModeClick = () => {
    setLightMode(!lightMode);
  };

  const handleUserClick = () => {
    setUserClicked(!userClicked);
  };

  const handleLogOutClick = async () => {
    await logOutUserAction();
  };

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Logo and Cart/Toggler (Mobile) */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="ShopCart Logo" className="h-10 w-auto" />
          </Link>
          <div className="flex xl:hidden items-center space-x-4 ml-2">
            <Link to="/" className="relative hover:text-gray-200">
              <FiShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-pink-500 text-xs flex items-center justify-center rounded-full">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button onClick={handleLightModeClick}>
              {lightMode ? (
                <MdLightMode className="h-6 w-auto" />
              ) : (
                <MdDarkMode className="h-6 w-auto" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden xl:flex flex-1 mx-8">
          <SearchBar />
        </div>

        {/* Nav Items (Desktop only) */}
        <div className="hidden xl:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) => `
px-4 py-2 transition-all
${
  isActive
    ? "text-pink-600 border-b-2 border-pink-500 font-medium"
    : "text-white hover:text-pink-400"
}
`}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `
px-4 py-2 transition-all
${
  isActive
    ? "text-pink-600 border-b-2 border-pink-500 font-medium"
    : "text-white hover:text-pink-400"
}
`}
          >
            Products
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) => `
px-4 py-2 transition-all
${
  isActive
    ? "text-pink-600 border-b-2 border-pink-500 font-medium"
    : "text-white hover:text-pink-400"
}
`}
          >
            Categories
          </NavLink>
          {auth.user && (
            <Link to="/" className="hover:text-gray-200">
              Orders
            </Link>
          )}

          <Link to="/cart" className="relative hover:text-gray-200">
            <FiShoppingCart className="h-6 w-6" />
            {cartItemsCount > 0 && auth.user && (
              <span className="absolute -top-2 -right-2 h-5 w-5 bg-pink-500 text-xs flex items-center justify-center rounded-full">
                {cartItemsCount}
              </span>
            )}
          </Link>

          <button onClick={handleLightModeClick}>
            {lightMode ? (
              <MdLightMode className="h-6 w-6 hover:cursor-pointer" />
            ) : (
              <MdDarkMode className="h-6 w-6 hover:cursor-pointer" />
            )}
          </button>

          {auth.user ? (
            <Link to="/" className="hover:text-gray-200">
              <FiUser onClick={handleUserClick} className="h-6 w-6" />
              {userClicked && (
                <div className="absolute right-0 mt-2 bg-gray-800 border border-gray-700 rounded shadow-md z-50">
                  <button
                    onClick={handleLogOutClick}
                    className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}
            </Link>
          ) : (
            <>
              <Link to="/auth/login" className="hover:text-gray-200">
                Login
              </Link>
              <Link
                to="/auth/signup"
                className="bg-pink-500 px-3 py-1 rounded hover:bg-pink-600"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>

        {/* Hamburger Menu */}
        <button
          className="xl:hidden ml-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Hamburger Dropdown (Mobile only) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-gray-800 py-4 px-6 z-50">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/categories" onClick={() => setMobileMenuOpen(false)}>
                Categories
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Collections
              </Link>
            </li>
            {auth.user && (
              <>
                <li>
                  <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                    Orders
                  </Link>
                </li>
              </>
            )}
            {!auth.user && (
              <>
                <li>
                  <Link
                    to="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/auth/signup"
                    className="bg-pink-500 text-center py-2 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
