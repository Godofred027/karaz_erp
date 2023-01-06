import { Router } from "express";
import {
  getStatesInvestors,
  createStatesInvestors,
  getOneStatesInvestors,
  updateStatesInvestors,
  deleteStatesInvestors,
} from "../controllers/statesInvestors.controller.js";

const router = Router();

router.get("/", getStatesInvestors);
router.post("/", createStatesInvestors);
router.get("/:id", getOneStatesInvestors);
router.put("/:id", updateStatesInvestors);
router.delete("/:id", deleteStatesInvestors);

export default router;
