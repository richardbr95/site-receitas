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

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Receitas em Destaque</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {receitas.map((receita, index) => {
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
    </div>
  );
}
