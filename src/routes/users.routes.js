import { Router } from "express";
import {
  getUsers,
  createUser,
  getOneUser,
  updateUser,
  deleteUser,
  uploadProfilePictures,
} from "../controllers/users.controller.js";

const router = Router();

router.get("/", getUsers);
router.post("/", uploadProfilePictures, createUser);
router.get("/:id", getOneUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
