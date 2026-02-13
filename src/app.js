import express from "express";
import cors from "cors";

import profileRoutes from "./routes/profile.routes.js";

const app = express();
app.use(cors());

app.use(express.json());

app.use("/profile", profileRoutes);

export default app;
