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

export default function Buscar() {
  const { termo } = useParams();
  const resultados = receitas.filter((r) =>
    r.titulo.toLowerCase().includes(termo.toLocaleLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center">
        Resultados para: "{termo}"
      </h1>
      {resultados.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resultados.map((receita, index) => {
            return (
              <CardReceita
                key={index}
                titulo={receita.titulo}
                imagem={receita.imagem}
                categoria={receita.categoria}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-10">
          Nenhuma Receita Encontrada Com Esse Termo.
        </p>
      )}
    </div>
  );
}
