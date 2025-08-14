import express from "express";
import {
  registrarUsuario,
  loginUsuario,
} from "../controllers/userController.js";
import { protegerRota } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

router.get("/perfil", protegerRota, (req, res) => {
  res.json({
    mensagem: "Acesso autorizado",
    usuario: req.usuario,
  });
});

export default router;
