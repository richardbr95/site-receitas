import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protegerRota = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }
  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = await User.findById(decoded.id).select("-senha");
    next();
  } catch (error) {
    res.status(401).json({ erro: "Token inválido ou expirado" });
  }
};
