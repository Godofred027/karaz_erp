import { Router } from "express";

import {
  uploadDocument,
  getDocuments,
} from "../controllers/documents.controller.js";

const router = Router();

router.post("/", uploadDocument, getDocuments);

export default router;
