import React, { useState } from 'react'
import { Form } from 'semantic-ui-react';

const SearchBar = ({ data }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    data.filter((search) => {
      return search.name.match(searchInput);
    });
  }
  return (
    <Form style={{ width: "250px", marginTop: "48px" }}>
      <Form.Field>
        <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput}
        />
      </Form.Field>
    </Form>
  )
}

export default SearchBar;