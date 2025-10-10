
import express from "express";
import { studentsEntry } from "../controllers/studentsEntry.controller.js";

const router = express.Router();

router.post("/save",studentsEntry);

export default router;