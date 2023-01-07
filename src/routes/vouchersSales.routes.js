import { Router } from "express";

import {
  getVouchersSales,
  createVoucherSale,
  getOneVoucherSale,
  updateVoucherSale,
  deleteVoucherSale,
  uploadVoucherSale,
} from "../controllers/vouchersSales.controller.js";

const router = Router();

router.get("/", getVouchersSales);
router.post("/", uploadVoucherSale, createVoucherSale);
router.get("/:id", getOneVoucherSale);
router.put("/:id", updateVoucherSale);
router.delete("/:id", deleteVoucherSale);

export default router;
