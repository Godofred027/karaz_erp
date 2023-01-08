import { Router } from "express";
import {
  getSellers,
  createSeller,
  getOneSeller,
  updateSeller,
  deleteSeller,
} from "../controllers/sellers.controller.js";

const router = Router();

router.get("/", getSellers);
router.post("/", createSeller);
router.get("/:id", getOneSeller);
router.put("/:id", updateSeller);
router.delete("/:id", deleteSeller);

export default router;
