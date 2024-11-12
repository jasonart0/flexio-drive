import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery); // Call the parent function with the search query
  };

  return (
    <div className="search-widget">
      <Form className="d-flex" onSubmit={handleSearch}>
        <FormControl
          type="search"
          placeholder="Filter"
          className="me-2"
          aria-label="Filter Search"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </Form>
    </div>
  );
};

export default SearchBar;
