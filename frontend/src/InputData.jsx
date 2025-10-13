
import React from "react";

function InputData({name, label, type, ...props}) {

    const onChangeInput=(e) =>{
      setInputValue(e.target.value);
     
    }
  
  return (
    <div className="input-block">
      <label htmlFor="name">{label}</label>
      <input type={type} name={name} {...props} />
    </div>
  );
}

export default InputData;
