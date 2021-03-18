import React, { useState } from "react";

const SearchBar = ({ handleChangeInSearch }) => {
  const [searchValue, setSearchValue] = useState(``);
  const handleChange = (value) => {
    setSearchValue(value);
    handleChangeInSearch(value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder='Search grocery list'
        value={searchValue}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </form>
  );
};
export default SearchBar;
