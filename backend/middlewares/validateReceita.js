export function validateReceita(req, res, next) {
  const { titulo, categoria, ingredientes, modoPreparo } = req.body;

  if (!titulo || titulo.trim() === "") {
    return res.status(400).json({ message: "O título é obrigatório" });
  }

  if (!categoria || categoria.trim() === "") {
    return res.status(400).json({ message: "A categoria é obrigatória" });
  }

  if (!Array.isArray(ingredientes) || ingredientes.length === 0) {
    return res.status(400).json({
      message: "Ingredientes deve ser um array com pelo menos 1 item",
    });
  }

  if (!modoPreparo || modoPreparo.trim() === "") {
    return res.status(400).json({ message: "O modo de preparo é obrigatório" });
  }

  next();
}
