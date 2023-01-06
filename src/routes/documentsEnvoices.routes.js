import { Router } from "express";
import {
  getDocumentsEnvoices,
  createDocumentEnvoice,
  getOneDocumentEnvoice,
  updateDocumentEnvoice,
  deleteDocumentEnvoice,
  uploadDocumentEnvoice,
} from "../controllers/documentsEnvoices.controller.js";

const router = Router();

router.get("/", getDocumentsEnvoices);
router.post("/", uploadDocumentEnvoice, createDocumentEnvoice);
router.get("/:id", getOneDocumentEnvoice);
router.put("/:id", updateDocumentEnvoice);
router.delete("/:id", deleteDocumentEnvoice);

export default router;
