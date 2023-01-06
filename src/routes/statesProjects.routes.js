import { Router } from "express";

import {
  getStatesProjects,
  createStatesProjects,
  getOneStatesProjects,
  updateStatesProjects,
  deleteStatesProjects,
} from "../controllers/statesProjects.controller.js";

const router = Router();

router.get("/", getStatesProjects);
router.post("/", createStatesProjects);
router.get("/:id", getOneStatesProjects);
router.put("/:id", updateStatesProjects);
router.delete("/:id", deleteStatesProjects);

export default router;
