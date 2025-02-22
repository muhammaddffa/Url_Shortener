import express from "express";
import { handleGenerateNewShortUrl, handleGetAnalytics } from "../controllers/urlController.js";

const router = express.Router();

router.post("/", handleGenerateNewShortUrl);

router.get("/analytics/:shortId", handleGetAnalytics)

export default router;
