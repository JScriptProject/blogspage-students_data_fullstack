import React, { useEffect, useState } from "react";
import InputData from "./InputData";

function App() {
  const [submittedData, setSubmittedData] = useState({});

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setSubmittedData((prev) => ({
      ...prev,
      name: formData.get("name"),
      age: formData.get("age"),
      email: formData.get("email"),
      place: formData.get("place"),
    }));
  };
  useEffect(()=>{
    console.log("rendering");
    if(Object.keys(submittedData).length > 0){
      console.log("Submitted Form data =>", submittedData);
    }
  },[submittedData])
  return (
    <div>
      <h1>The student Website</h1>
      <div className="form-section">
        <h2>Student information Entry form</h2>
        <form onSubmit={onSubmitForm} className="form">
          <div className="input-section">
            <InputData name="name" label="Name" type="text" />
            <InputData name="age" label="Age" type="number" />
            <InputData name="email" label="Email" type="email" />
            <InputData name="place" label="Place" type="text" />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
