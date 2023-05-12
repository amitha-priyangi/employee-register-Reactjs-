import React from 'react';

const DropdownMenu = ({ suggestions, handleSelect }) => {
  return (
    <ul className='dropdown'>
      {suggestions.map((suggestion, index) => (
        <li className='dropdown-menu' key={index} onClick={() => handleSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;