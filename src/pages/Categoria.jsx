import { useParams } from "react-router-dom";
import CardReceita from "../components/CardReceita";
import boloImg from "../assets/bolo-de-chocolate-facil.jpg";

const receitas = [
  {
    titulo: "Panqueca Americana",
    imagem:
      "https://moinhoglobo.com.br/wp-content/uploads/2015/10/panqueca-americana-1-640x372.jpg",
    categoria: "Café da Manhã",
  },
  {
    titulo: "Macarrão ao Alho e Óleo",
    imagem:
      "https://www.receiteria.com.br/wp-content/uploads/macarrao-alho-e-oleo-capa.png",
    categoria: "Almoço",
  },
  {
    titulo: "Bolo de Chocolate",
    imagem: boloImg,
    categoria: "Sobremesa",
  },
];

export default function Categoria() {
  const { categoria } = useParams();
  const receitasFiltradas = receitas.filter((r) => {
    return r.categoria.toLowerCase() === categoria.toLocaleLowerCase();
  });

  if (receitasFiltradas.length === 0) {
    return (
      <div className="text-center mt-8">
        <h1 className="text-2xl font-bold mb-4">Categoria: {categoria}</h1>
        <p className="text-gray-600">
          Nenhuma receita encontrada para esta categoria
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center my-4">
        Categoria: {categoria}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {receitasFiltradas.map((receita, index) => (
          <CardReceita
            key={index}
            titulo={receita.titulo}
            imagem={receita.imagem}
            categoria={receita.categoria}
          />
        ))}
      </div>
    </div>
  );
}
