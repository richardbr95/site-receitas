import express from "express";
import {
  criarReceita,
  listarReceitas,
} from "../controllers/receitaController.js";
import { validateReceita } from "../middlewares/validateReceita.js";

const router = express.Router();

router.get("/receitas", listarReceitas);
router.post("/receitas", validateReceita, criarReceita);
// router.put("/receitas/:id", validateReceita, editarReceita);
// router.delete("/receitas/:id", excluirReceita);

export default router;
