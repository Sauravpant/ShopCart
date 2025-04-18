import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import searchContext from "../../store/SearchContext";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { searchValue, setSearchValue } = useContext(searchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-xl xl:max-w-md mx-4 border border-white rounded-md overflow-hidden"
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search products..."
        className="flex-1 px-3 py-2 bg-transparent text-white placeholder-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 hover:bg-blue-700"
      >
        <FiSearch className="h-5 w-5 text-white" />
      </button>
    </form>
  );
};

export default SearchBar;
