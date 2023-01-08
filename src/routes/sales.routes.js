import { Router } from "express";
import {
  getSales,
  createSale,
  getOneSale,
  updateSale,
  deleteSale,
} from "../controllers/sales.controller.js";

const router = Router();

router.get("/", getSales);
router.post("/", createSale);
router.get("/:id", getOneSale);
router.put("/:id", updateSale);
router.delete("/:id", deleteSale);

export default router;
