import React from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {


  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input 
      className="TodoSearch"
      placeholder="Cebolla"
      disabled = {loading}
      value={searchValue}
      onChange={onSearchValueChange} />
  );
}

export { TodoSearch };