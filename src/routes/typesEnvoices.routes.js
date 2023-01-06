import { Router } from "express";
import {
  getTypesEnvoices,
  createTypesEnvoices,
  getOneTypesEnvoices,
  updateTypesEnvoices,
  deleteTypesEnvoices,
} from "../controllers/typesEnvoices.controller.js";

const router = Router();

router.get("/", getTypesEnvoices);
router.post("/", createTypesEnvoices);
router.get("/:id", getOneTypesEnvoices);
router.put("/:id", updateTypesEnvoices);
router.delete("/:id", deleteTypesEnvoices);

export default router;
