import axios from "axios";
const studentsForm = async (submittedData) => {
  const URI = "http://localhost:8000";

  const response = await axios.post(`${URI}/api/student/save`, submittedData);
  return response.data;
};

export { studentsForm };
