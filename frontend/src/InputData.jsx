import React from "react";

function InputData({name, label, type, ...props}) {
  return (
    <div className="input-block">
      <label htmlFor="name">{label}</label>
      <input type={type} name={name} {...props} />
    </div>
  );
}

export default InputData;
