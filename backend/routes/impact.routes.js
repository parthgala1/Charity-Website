import express from "express";
import {
  createImpact,
  updateImpact,
  getImpact,
  deleteImpact,
} from "../controllers/impact.controllers.js";

const router = express();

router.get("/", getImpact);
router.post("/create", createImpact);
router.delete("/delete/:id", deleteImpact);
router.put("/update/:id", updateImpact);

export default router;
