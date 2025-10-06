import React from "react";
import { useState } from "react";

function InputData({name, label, type}) {
    const [inputValue, setInputValue] = useState("");
  return (
    <div className="input-block">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" value={inputValue} />
    </div>
  );
}

export default InputData;
