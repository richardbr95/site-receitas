import Recipe from "../models/Recipe.js";

export const criarReceita = async (req, res) => {
  try {
    const novaReceita = await Recipe.create(req.body);
    res.status(201).json(novaReceita);
  } catch (error) {
    res.status(400).json({ erro: "Erro ao criar receita" });
  }
};

export const listarReceitas = async (req, res) => {
  try {
    const receitas = await Recipe.find();
    res.status(200).json(receitas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar receitas" });
  }
};
