import { Router } from "express";
import {
  getDocumentsProjects,
  createDocumentProject,
  getOneDocumentProject,
  updateDocumentProject,
  deleteDocumentProject,
  uploadDocumentProject,
} from "../controllers/documentsProject.controller.js";

const router = Router();

router.get("/", getDocumentsProjects);
router.post("/", uploadDocumentProject, createDocumentProject);
router.get("/:id", getOneDocumentProject);
router.put("/:id", updateDocumentProject);
router.delete("/:id", deleteDocumentProject);

export default router;
