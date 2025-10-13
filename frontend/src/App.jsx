import React, { useEffect, useState } from "react";
import InputData from "./InputData";
import { studentsForm } from "./API/studentForm.api.js";

function App() {
  const [showError, setShowError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      age: formData.get("age"),
      email: formData.get("email"),
      place: formData.get("place"),
    };
    setTimeout(async () => {
      const result = await studentsForm(data);
      if (result.success) {
        setSuccessMessage(result.message);
        e.target.reset();
      }
      else {
        setShowError(result.error);
      }
    }, 2000);
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => setSuccessMessage(null), 2000);
      return () => clearTimeout(timer);
    }
    if (showError) {
      const timer = setTimeout(() => setShowError(null), 2000);
      return () => clearTimeout(timer);
    }
  }, [showError, successMessage]);

  return (
    <div className="relative">
      {(showError || successMessage) && <p className ={showError ? "errorMessage" : "successMessage"}>{showError || successMessage}</p> }
      <h1>The student Website</h1>
      <div className="form-section">
        <h2>Student information Entry form</h2>
        <form onSubmit={onSubmitForm} className="form">
          <div className="input-section">
            <InputData name="name" label="Name" type="text" required />
            <InputData name="age" label="Age" type="number" required />
            <InputData name="email" label="Email" type="email" required />
            <InputData name="place" label="Place" type="text" required />
          </div>
          <button className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
