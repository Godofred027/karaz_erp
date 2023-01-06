import { Router } from "express";
import {
  getClients,
  createClient,
  getOneClient,
  updateClient,
  deleteClient,
} from "../controllers/client.controller.js";

const router = Router();

router.get("/", getClients);
router.post("/", createClient);
router.get("/:id", getOneClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
