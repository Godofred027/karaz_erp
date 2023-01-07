import { Router } from "express";
import {
  getDocumentsSales,
  createDocumentSale,
  getOneDocumentSale,
  updateDocumentSale,
  deleteDocumentSale,
  uploadDocumentSale,
} from "../controllers/documentsSales.controller.js";

const router = Router();

router.get("/", getDocumentsSales);
router.post("/", uploadDocumentSale, createDocumentSale);
router.get("/:id", getOneDocumentSale);
router.put("/:id", updateDocumentSale);
router.delete("/:id", deleteDocumentSale);

export default router;
