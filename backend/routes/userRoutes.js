import express from "express";
import {
  registrarUsuario,
  loginUsuario,
  usuarioAutorizado,
} from "../controllers/userController.js";
import { protegerRota } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registrarUsuario);
router.post("/login", loginUsuario);

router.get("/perfil", protegerRota, usuarioAutorizado);

export default router;
