/** @format */

import React from "react";
import "../index.css";
import useCounter from "./UseCounter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { faRefresh } from '@fortawesome/free-solid-svg-icons';

function Counter() {
  const { count, increment, decrement, reset, setValue } = useCounter();
  const [inputValue, setInputValue] = useState("");

  const handleSetValue = () => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      setValue(parsedValue);
      setInputValue("");
    }
  };

  return (
    <>
    <div>
    <h1>Counter Page</h1>
    <Link className="link" to="error">Error Page</Link>
    <Link className="link" to="*">Not Found Page</Link>
  </div>
    <div className="btn_container">
      
      <p>Count: {count}</p>
      <div className="input_container">
        <input
          type="text"
          placeholder="Set Value"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="input_field"
        />
        <button onClick={handleSetValue}   className="input_btn">Set Value</button>
      </div>
      <div className="btn">
        <button onClick={increment} className ="btn_increment">Increment <FontAwesomeIcon icon={faChevronUp} /></button>
        <button onClick={decrement} className ="btn_decrement">Decrement <FontAwesomeIcon icon={faChevronDown} /></button>
        <button onClick={reset} className ="btn_reset">Reset <FontAwesomeIcon icon={faRefresh} /></button>
      </div>
    
    </div>
    </>
  );
}

export default Counter;
