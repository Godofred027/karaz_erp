import { Router } from "express";
import { requireToken } from "../middlewares/requireToken.js";
import {
  login,
  getInfo,
  refreshToken,
  logout,
} from "../controllers/auth.controller.js";
import { requireRefreshToken } from "../middlewares/requireRefreshToken.js";

const router = Router();

router.post("/login", login);

router.get("/getInfo", requireToken, getInfo);

router.get("/refresh", requireRefreshToken, refreshToken);

router.get("/logout", logout);

export default router;
