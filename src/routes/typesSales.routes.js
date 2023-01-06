import { Router } from "express";
import {
  getTypesSales,
  createTypesSales,
  getOneTypesSales,
  updateTypesSales,
  deleteTypesSales,
} from "../controllers/typesSales.controller.js";

const router = Router();

router.get("/", getTypesSales);
router.post("/", createTypesSales);
router.get("/:id", getOneTypesSales);
router.put("/:id", updateTypesSales);
router.delete("/:id", deleteTypesSales);

export default router;
