import { Student } from "../models/studentForm.model.js";

const studentsEntry = async (req, res) => {
  try {
    const body = req.body || {};
    const { name, age, email, place } = body;
    if (!name || !age || !email || !place) {
       return res.status(400).json({ error: "All input required!!" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Oops, email is not in correct format!!" });
    }

    const response = await Student.create({ name, age, email, place});
    if (!response) {
      return res.status(500).json({ error: "Issue while saving data" });
    }
    res.status(201).json({message:"Data added to DB successfully!"}, response);
  } catch (error) {
    console.error("Error occured", error);
    return res.status(500).json({ error: "Internal server error" })
  }
};

export { studentsEntry };
