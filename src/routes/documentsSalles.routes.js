import { Router } from "express";
import {
  getDocumentsSalles,
  createDocumentSalle,
  getOneDocumentSalle,
  updateDocumentSalle,
  deleteDocumentSalle,
  uploadDocumentSalle,
} from "../controllers/documentsSalles.controller.js";

const router = Router();

router.get("/", getDocumentsSalles);
router.post("/", uploadDocumentSalle, createDocumentSalle);
router.get("/:id", getOneDocumentSalle);
router.put("/:id", updateDocumentSalle);
router.delete("/:id", deleteDocumentSalle);

export default router;
