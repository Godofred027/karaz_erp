import { Router } from "express";
import {
  getTypesSellers,
  createTypesSellers,
  getOneTypesSellers,
  updateTypesSellers,
  deleteTypesSellers,
} from "../controllers/typesSellers.controller.js";

const router = Router();

router.get("/", getTypesSellers);
router.post("/", createTypesSellers);
router.get("/:id", getOneTypesSellers);
router.put("/:id", updateTypesSellers);
router.delete("/:id", deleteTypesSellers);

export default router;
