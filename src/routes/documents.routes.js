import { Router } from "express";

import {
  uploadDocument,
  getDocuments,
  showDocuments,
} from "../controllers/documents.controller.js";

const router = Router();

router.get("/", showDocuments);

router.post("/", uploadDocument, getDocuments);

export default router;
