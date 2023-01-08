import { Router } from "express";
import {
  getPaidSellers,
  createPaidSeller,
  getOnePaidSeller,
  updatePaidSeller,
  deletePaidSeller,
} from "../controllers/paidSellers.controller.js";

const router = Router();

router.get("/", getPaidSellers);
router.post("/", createPaidSeller);
router.get("/:id", getOnePaidSeller);
router.put("/:id", updatePaidSeller);
router.delete("/:id", deletePaidSeller);

export default router;
