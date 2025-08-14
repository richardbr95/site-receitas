import express from "express";
import {
  atualizarReceita,
  criarReceita,
  excluirReceita,
  listarMinhasReceitas,
  listarReceitas,
} from "../controllers/receitaController.js";
import { validateReceita } from "../middlewares/validateReceita.js";
import { protegerRota } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/receitas", listarReceitas);

router.get("/receitas/minhas", protegerRota, listarMinhasReceitas);
router.post("/receitas", protegerRota, validateReceita, criarReceita);
router.put("/receitas/:id", protegerRota, validateReceita, atualizarReceita);
router.delete("/receitas/:id", protegerRota, excluirReceita);

export default router;
