import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true },
    categoria: { type: String, required: true },
    descricao: { type: String },
    ingredientes: { type: [String], required: true },
    modoPreparo: { type: String, required: true },
    imagem: { type: String },
    usuarioId: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
