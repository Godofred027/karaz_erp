import { Router } from "express";
import {
  getRoles,
  createRole,
  getOneRole,
  updateRole,
  deleteRole,
} from "../controllers/roles.controller.js";

const router = Router();

router.get("/", getRoles);

router.post("/", createRole);

router.get("/:id", getOneRole);

router.put("/:id", updateRole);

router.delete("/:id", deleteRole);

export default router;
