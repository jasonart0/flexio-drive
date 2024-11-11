import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  // State for search input and selected search type
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("Role"); // Default search type
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // Available roles and search types
  const roles = ["Admin", "Dispatcher", "Driver", "Customer", "Manager"];
  const searchTypes = ["Role", "Name", "Email"];

  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search type selection
  const handleSearchTypeSelection = (type) => {
    setSearchType(type);
    setIsDropdownVisible(false);
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Filter roles or items based on search type and search query
  const filteredRoles = roles.filter((role) =>
    searchType === "Role" && role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="search-widget">
      {/* Search type dropdown */}
      
        <button
          className="search-btn"
          onClick={toggleDropdown}
        >
          {searchType}
        </button>
        {isDropdownVisible && (
          <div className="absolute right-0 w-32 bg-white text-black shadow-lg mt-1 rounded-md z-10">
            {searchTypes.map((type, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleSearchTypeSelection(type)}
              >
                {type}
              </div>
            ))}
          </div>
        )}
     

      {/* Search input */}
      <input
        type="text"
        placeholder={`Search by ${searchType.toLowerCase()}`}
        className="search-bar p-2 rounded-r bg-gray-700 text-white w-full"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />

      {/* Filtered results (display only for role search) */}
      {searchType === "Role" && searchQuery && (
        <div className="absolute w-full bg-white text-black shadow-lg mt-12 rounded-md">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role, index) => (
              <div
                key={index}
                className="p-2 cursor-pointer hover:bg-gray-200"
                onClick={() => setSearchQuery(role)}
              >
                {role}
              </div>
            ))
          ) : (
            <div className="p-2">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
