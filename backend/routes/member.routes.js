import express from "express";
import {
  getMembers,
  deleteMember,
} from "../controllers/members.controllers.js";

const router = express();

router.get("/", getMembers);
router.delete("/:id", deleteMember);

export default router;
