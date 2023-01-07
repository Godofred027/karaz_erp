import { Router } from "express";

import {
  getVouchersSellers,
  createVoucherSeller,
  getOneVoucherSeller,
  updateVoucherSeller,
  deleteVoucherSeller,
  uploadVoucherSeller,
} from "../controllers/vouchersSellers.controller.js";

const router = Router();

router.get("/", getVouchersSellers);
router.post("/", uploadVoucherSeller, createVoucherSeller);
router.get("/:id", getOneVoucherSeller);
router.put("/:id", updateVoucherSeller);
router.delete("/:id", deleteVoucherSeller);

export default router;
