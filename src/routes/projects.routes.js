import { Router } from "express";
import {
  getProjects,
  createProject,
  getOneProject,
  updateProject,
  deleteProject,
} from "../controllers/projects.controller.js";

const router = Router();

router.get("/", getProjects);
router.post("/", createProject);
router.get("/:id", getOneProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

export default router;
