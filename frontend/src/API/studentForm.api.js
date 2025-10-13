import axios from "axios";
const studentsForm = async (submittedData) => {
  try {
    const URI = "http://localhost:8000";
    const response = await axios.post(`${URI}/api/student/save`, submittedData);
    return {
      success: true,
      message: response.data.message,
      status: response.status,
    };
  } catch (error) {
    const errorMessage = error.response.data.error || "Something went wrong";
    return {
      success: false,
      error: errorMessage,
      status: error.response?.status || 500,
    };
  }
};

export { studentsForm };
