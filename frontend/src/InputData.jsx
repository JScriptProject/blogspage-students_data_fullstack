
import React,{ useState } from "react";

function InputData({name, label, type, ...props}) {
    const [inputValue, setInputValue] = useState("");

    const onChangeInput=(e) =>{
      setInputValue(e.target.value);
     
    }
  
  return (
    <div className="input-block">
      <label htmlFor="name">{label}</label>
      <input type={type} name={name} value={inputValue} onChange={onChangeInput} {...props} />
    </div>
  );
}

export default InputData;
