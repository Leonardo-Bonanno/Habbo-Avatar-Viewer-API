import { Router } from "express";
import { getProfile } from "../controllers/profile.controller.js";

const router = Router();

router.get("/:name", getProfile);

export default router;