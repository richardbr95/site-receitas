import Recipe from "../models/Recipe.js";

export const criarReceita = async (req, res) => {
  try {
    const { titulo, descricao, categoria, imagem, ingredientes, modoPreparo } =
      req.body;

    const novaReceita = new Recipe({
      titulo,
      descricao,
      categoria,
      imagem,
      ingredientes,
      modoPreparo,
      usuario: req.usuario._id,
    });
    const receitaSalva = await novaReceita.save();
    res.status(201).json(receitaSalva);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar receita" });
  }
};

export const listarMinhasReceitas = async (req, res) => {
  try {
    const minhasReceitas = await Recipe.find({ usuario: req.usuario._id });
    res.status(200).json(minhasReceitas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar suas receitas" });
  }
};

export const listarReceitas = async (req, res) => {
  try {
    const receitas = await Recipe.find().populate("usuario", "nome email");
    res.status(200).json(receitas);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar receitas" });
  }
};

export const atualizarReceita = async (req, res) => {
  try {
    const { id } = req.params;

    const receita = await Recipe.findById(id);
    if (!receita) {
      return res.status(404).json({ message: "Receita não encontrada" });
    }

    if (receita.usuario.toString() !== req.usuario._id.toString()) {
      return res
        .status(403)
        .json({ erro: "Você não tem permissão para editar esta receita" });
    }
    const { titulo, descricao, categoria, imagem, ingredientes, modoPreparo } =
      req.body;
    if (titulo) receita.titulo = titulo;
    if (descricao) receita.descricao = descricao;
    if (categoria) receita.categoria = categoria;
    if (imagem) receita.imagem = imagem;
    if (ingredientes) receita.ingredientes = ingredientes;
    if (modoPreparo) receita.modoPreparo = modoPreparo;
    const receitaAtualizada = await receita.save();

    res.status(200).json(receitaAtualizada);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao Atualizar a Receita" });
  }
};

export const excluirReceita = async (req, res) => {
  try {
    const { id } = req.params;

    const receita = await Recipe.findById(id);

    if (!receita) {
      return res.status(404).json({ error: "Receita não encontrada" });
    }

    if (receita.usuario.toString() !== req.usuario._id.toString()) {
      return res
        .status(403)
        .json({ erro: "Você não tem permissão para deletar esta receita" });
    }

    await receita.deleteOne();

    res.status(200).json({ message: "Receita deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar a receita" });
  }
};
