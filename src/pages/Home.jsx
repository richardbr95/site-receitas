import CardReceita from "../components/CardReceita";
import boloImg from "../assets/bolo-de-chocolate-facil.jpg";
import CampoBusca from "../components/CampoBusca";
import LogoImg from "../assets/logoRE.png";

const receitas = [
  {
    titulo: "Panqueca Americana",
    imagem:
      "https://moinhoglobo.com.br/wp-content/uploads/2015/10/panqueca-americana-1-640x372.jpg",
    categoria: "Café da Manhã",
    descricao: "Panquecas leves e fofinhas para um café delicioso.",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1 ovo",
      "1 xícara de leite",
      "1 colher (sopa) de açúcar",
      "1 colher (chá) de fermento em pó",
    ],
    preparo: "Misture todos os ingredientes até obter uma massa homogênea...",
  },

  {
    titulo: "Macarrão ao Alho e Óleo",
    imagem:
      "https://www.receiteria.com.br/wp-content/uploads/macarrao-alho-e-oleo-capa.png",
    categoria: "Almoço",
    descricao: "Panquecas leves e fofinhas para um café delicioso.",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1 ovo",
      "1 xícara de leite",
      "1 colher (sopa) de açúcar",
      "1 colher (chá) de fermento em pó",
    ],
    preparo: "Misture todos os ingredientes até obter uma massa homogênea...",
  },
  {
    titulo: "Bolo de Chocolate",
    imagem: boloImg,
    categoria: "Sobremesa",
    descricao: "Panquecas leves e fofinhas para um café delicioso.",
    ingredientes: [
      "1 xícara de farinha de trigo",
      "1 ovo",
      "1 xícara de leite",
      "1 colher (sopa) de açúcar",
      "1 colher (chá) de fermento em pó",
    ],
    preparo: "Misture todos os ingredientes até obter uma massa homogênea...",
  },
];

export default function Home() {
  return (
    <div>
      <section className="flex flex-col min-h-screen">
        <div className="block relative">
          <h1 className="absolute grow text-3xl text-white d-flex justify-center">
            sdws
          </h1>
          <img
            src={boloImg}
            alt=""
            className="w-[100%] bg-cover rounded-3xl "
          />
          <img
            src={LogoImg}
            alt=""
            className="w-[100%] bg-cover rounded-3xl "
          />
        </div>
      </section>

      <section>
        <h1 className="text-3xl font-bold mb-10 text-center m-auto bg-amber-200 w-fit rounded-3xl p-3">
          Receitas em Destaque
        </h1>
        <CampoBusca />
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
      </section>
    </div>
  );
}
