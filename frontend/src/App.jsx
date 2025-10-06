import React, { useState } from "react";
import InputData from "./InputData";

function App() {

// const [inputValue, setInputValue] = useState("");

const handleClick=(e)=>{
   

}
  return (
    <div>
      <h1>The student Website</h1>
      <div className="form-section">
        <h2>Student information Entry form</h2>
        <form action="" className="form">
          <div className="input-section">
            <InputData name="name" label="Name" type="text"/>
            <InputData name="age" label="Age" type="number"/>
            <InputData name="email" label="Email" type="email"/>
            <InputData name="place" label="Place" type="text"/>
            
          </div>

          <button type="button" className="submit-btn" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
