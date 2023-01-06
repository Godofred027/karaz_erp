import { Router } from "express";
import {
  getBanks,
  createBank,
  getOneBank,
  updateBank,
  deleteBank,
} from "../controllers/banks.controller.js";

const router = Router();

router.get("/", getBanks);
router.post("/", createBank);
router.get("/:id", getOneBank);
router.put("/:id", updateBank);
router.delete("/:id", deleteBank);

export default router;
