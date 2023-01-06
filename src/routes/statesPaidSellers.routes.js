import { Router } from "express";
import {
  getStatesPaidSellers,
  createStatesPaidSellers,
  getOneStatesPaidSellers,
  updateStatesPaidSellers,
  deleteStatesPaidSellers,
} from "../controllers/statesPaidSellers.controller.js";

const router = Router();

router.get("/", getStatesPaidSellers);
router.post("/", createStatesPaidSellers);
router.get("/:id", getOneStatesPaidSellers);
router.put("/:id", updateStatesPaidSellers);
router.delete("/:id", deleteStatesPaidSellers);

export default router;
