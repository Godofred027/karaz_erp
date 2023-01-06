import { Router } from "express";
import {
  getBills,
  createBill,
  getOneBill,
  updateBill,
  deleteBill,
} from "../controllers/bills.controller.js";

const router = Router();

router.get("/", getBills);
router.post("/", createBill);
router.get("/:id", getOneBill);
router.put("/:id", updateBill);
router.delete("/:id", deleteBill);

export default router;
