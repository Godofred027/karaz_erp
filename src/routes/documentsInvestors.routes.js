import { Router } from "express";
import {
  getDocumentsInvestors,
  createDocumentInvestor,
  getOneDocumentInvestor,
  updateDocumentInvestor,
  deleteDocumentInvestor,
  uploadDocumentInvestor,
} from "../controllers/documentsInvestor.controller.js";

const router = Router();

router.get("/", getDocumentsInvestors);
router.post("/", uploadDocumentInvestor, createDocumentInvestor);
router.get("/:id", getOneDocumentInvestor);
router.put("/:id", updateDocumentInvestor);
router.delete("/:id", deleteDocumentInvestor);

export default router;
