import { Router } from "express";
import {
  getInvestors,
  createInvestor,
  getOneInvestor,
  updateInvestor,
  deleteInvestor,
} from "../controllers/investors.controller.js";

const router = Router();

router.get("/", getInvestors);
router.post("/", createInvestor);
router.get("/:id", getOneInvestor);
router.put("/:id", updateInvestor);
router.delete("/:id", deleteInvestor);

export default router;
