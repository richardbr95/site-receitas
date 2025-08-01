import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import receitasRoutes from "./routes/receitaRoutes.js";
import cors from "cors";
import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

connectDB();

app.use(logger);
app.use("/api", receitasRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor rodando no http://localhost:${PORT}`);
});
