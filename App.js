import React, { useState } from 'react';
import './App.css';

const TwoWayBindingExample = () => {
  
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <textarea
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Current Value: {inputValue}</p>
    </div>
  );
};

export default TwoWayBindingExample;
