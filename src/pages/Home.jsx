import CardReceita from "../components/CardReceita";
import CampoBusca from "../components/CampoBusca";

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
    imagem:
      " https://cdn-productdbimages.barry-callebaut.com/sites/default/files/styles/mdp_web_gm_chocac-detail/public/externals/d73ed7c82007f2c7d6b1615a80920207.jpg?itok=p8W4PzRn",
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
      <section className="flex flex-col relative mb-10 ">
        <div>
          <img
            src=" https://cdn-productdbimages.barry-callebaut.com/sites/default/files/styles/mdp_web_gm_chocac-detail/public/externals/d73ed7c82007f2c7d6b1615a80920207.jpg?itok=p8W4PzRn"
            alt=""
            className="w-3xl float-left mr-4 rounded-4xl"
          />
          <h1 className="flex justify-center text-3xl text-white font-bold bg-amber-500 rounded-3xl w-fit m-auto p-2  mt-10">
            Receita do Mestre!
          </h1>

          <h3 className="mt-5 text-center text-2xl font-semibold">
            🎂 Conheça o Mestre dos Bolos: Lorenzo Bianchi
          </h3>
          <p className=" text-xl text-wrap mt-2.5">
            Com mais de 15 anos de experiência na arte da confeitaria, Lorenzo
            Bianchi é um verdadeiro mestre em transformar ingredientes em
            emoções. Inspirado pelas tradições italianas e pela paixão por
            sabores autênticos, cada bolo criado por Lorenzo carrega uma
            história, um cuidado artesanal e um sabor inesquecível. Desde
            receitas clássicas até criações exclusivas, suas obras encantam não
            só pelo paladar, mas também pela beleza e elegância. Seja para um
            aniversário especial, um casamento ou uma comemoração íntima, os
            bolos de Lorenzo Bianchi são o toque final perfeito para qualquer
            ocasião.
          </p>
        </div>
      </section>

      {/* <section className="bg-amber-900">aaaaaaaaa</section> */}

      <section>
        <h1 className="text-3xl  text-white font-bold mb-10 text-center m-auto bg-amber-500 w-fit rounded-3xl p-3">
          Receitas em Destaque
        </h1>

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
