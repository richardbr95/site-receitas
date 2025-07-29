import { useParams } from "react-router-dom";
import CardReceita from "../components/CardReceita";

import receitasEstaticas from "../data/receitasEstaticas";

const categorias = ["Café da Manhã", "Almoço", "Sobremesa", "Bebida"];
function desslugify(slug) {
  const slugNormalizado = slug
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  return categorias.find((cat) => {
    const catSlug = cat
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
    return catSlug === slugNormalizado;
  });
}

export default function Categoria() {
  const { categoria } = useParams();
  const nomeOriginal = desslugify(categoria);

  if (!nomeOriginal) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-red-600 m-auto w-fit p-2 px-3 rounded-3xl text-white select-none">
          Categoria inválida
        </h1>
        <p className="text-gray-600">
          A categoria "{categoria}" não foi reconhecida.
        </p>
      </div>
    );
  }

  const receitasFiltradas = receitasEstaticas.filter((r) => {
    return r.categoria === nomeOriginal;
  });

  if (receitasFiltradas.length === 0) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-amber-600 m-auto w-fit p-2 px-3 rounded-3xl text-white select-none">
          Categoria: {categoria}
        </h1>
        <p className="text-gray-600">
          Nenhuma receita encontrada para esta categoria
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-amber-600 m-auto w-fit p-2 px-3 rounded-3xl text-white select-none">
        Categoria: {nomeOriginal || categoria}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {receitasFiltradas.map((receita, index) => (
          <CardReceita
            key={index}
            id={receita.id}
            titulo={receita.titulo}
            imagem={receita.imagem}
            categoria={receita.categoria}
          />
        ))}
      </div>
    </div>
  );
}
