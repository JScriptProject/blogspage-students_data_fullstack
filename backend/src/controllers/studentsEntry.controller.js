import {Student}  from '../models/studentForm.model.js';

const studentsEntry = async(req, res) =>{

    try {
            const body = req.body || {};
    const {name, age, email, place} = body;
    if(!name || !age || !email || !place)
    {
        throw new Error("All input required!!");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(email))
    {
        throw new Error("Opps email is not in correct format");
    }

    const response = await Student.create({name,age, email, place});
    if(!response)
    {
        throw new Error("Issue while saving data");
    }
    console.log("Operation succesful!!");
    res.status(201).json(response);
        
    } catch (error) {
        console.error("Error occured", error);
    }
}

export {studentsEntry};