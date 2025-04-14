import { useContext, useState } from "react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import searchContext from "../../store/SearchContext";
import { useNavigate } from "react-router-dom";
const departments = [
  "All",
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "BBooks",
];

const SearchBar = () => {
  const [selectedDept, setSelectedDept] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { searchValue, setSearchValue } = useContext(searchContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <div className="flex flex-1 max-w-2xl mx-4">
      <div className="relative ">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center h-full px-4 py-2 bg-blue-400 border border-r-0 rounded-l-md hover:bg-gray-400"
        >
          <span className="mr-1 text-black">{selectedDept}</span>
          <FiChevronDown
            className={`transition-transform ${
              isDropdownOpen ? "rotate-180" : "bg-black-300"
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute z-10 mt-1 w-48 bg-white border rounded-md shadow-lg">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => {
                  setSelectedDept(dept);
                  setIsDropdownOpen(false);
                }}
                className={`block w-full text-left text-black px-4 py-2 hover:bg-blue-50 ${
                  selectedDept === dept ? "bg-blue-100" : ""
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        )}
      </div>
      <form onSubmit={handleSearch} className="flex flex-1">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 border-t border-b focus:outline-none"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 border border-l-0 rounded-r-md hover:bg-blue-800"
        >
          <FiSearch className="h-5 w-5" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
