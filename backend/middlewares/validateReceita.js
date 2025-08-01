export function validateReceita(req, res, next) {
  const { titulo, categoria, ingredientes, modoPreparo, usuarioId } = req.body;
  if (!titulo || !categoria || !ingredientes || !modoPreparo || !usuarioId) {
    return res.status(400).json({ message: "Campos obrigatórios faltando" });
  }

  if (!Array.isArray(ingredientes) || ingredientes.length === 0) {
    return res.status(400).json({
      message: "Ingredientes deve ser um array com pelo menos 1 item",
    });
  }

  next();
}
