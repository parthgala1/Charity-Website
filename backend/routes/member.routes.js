import express from "express";
import { getMembers } from "../controllers/members.controllers.js";

const router = express();

router.get("/", getMembers);

export default router;
