import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import receitasEstaticas from "../data/receitasEstaticas";
import { useEffect, useState } from "react";

export default function Detalhes() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const usuario = localStorage.getItem("usuarioLogado");
  const [receita, setReceita] = useState(null);

  useEffect(() => {
    let encontrada;

    if (usuario) {
      const dados = JSON.parse(
        localStorage.getItem("receitasPorUsuario") || "{}"
      );
      const receitasUsuario = dados[usuario] || [];
      encontrada = receitasUsuario.find((r) => r.id === slug);
    }
    if (!encontrada) {
      encontrada = receitasEstaticas.find((r) => r.id === slug);
    }
    if (!usuario) {
      navigate(usuario ? "/minhas-receitas" : "/login");
      return;
    }

    setReceita(encontrada);
  }, [slug, usuario, navigate]);

  if (!receita) {
    return <p className="text-red-500">Receita não encontrada.</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={() => {
          return navigate(-1);
        }}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">{receita.titulo}</h1>
      {receita.imagem && (
        <img
          src={receita.imagem}
          alt={receita.titulo}
          className="w-full h-64 object-cover rounded-xl shadow mb-4"
        />
      )}
      <p className="text-gray-500 my-2 italic">
        Categoria: {receita.categoria}
      </p>
      <p className="text-lg mb-4">{receita.descricao}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      {Array.isArray(receita.ingredientes) ? (
        <ul className="list-disc list-inside mb-4">
          {receita.ingredientes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p className="whitespace-pre-wrap mb-4">{receita.ingredientes}</p>
      )}

      <h2 className="text-xl font-semibold mb-2">Modo de Preparo</h2>
      <p>{receita.preparo}</p>
    </div>
  );
}
