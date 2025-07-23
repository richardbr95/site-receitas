import CardReceita from "../components/CardReceita";

const receitasDestaque = [
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

const receitasSucos = [
  {
    titulo: "Suco de Abacaxi com Limão",
    imagem:
      "https://images.mrcook.app/recipe-image/0192681f-e0ba-71cd-b260-94309ea9d70b?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ=",
    categoria: "Bebida",
    descricao:
      "Refrescante combinação tropical de abacaxi doce com toque cítrico do limão.",
    ingredientes: [
      "2 xícaras de abacaxi picado",
      "1/2 xícara de suco de limão fresco (aprox. 2 limões)",
      "2 colheres (sopa) de açúcar ou a gosto",
      "500 ml de água gelada",
      "Gelo a gosto",
    ],
    preparo:
      "Bata o abacaxi, o suco de limão, o açúcar e a água no liquidificador. Coe se desejar. Sirva com gelo.",
  },
  {
    titulo: "Suco de Maracujá com Hortelã",
    imagem:
      "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/05/suco-de-maracuja-manga-e-hortela-12949.jpg?w=566&ssl=1",
    categoria: "Bebida",
    descricao:
      "Suco de maracujá cítrico com toque fresco de hortelã — perfeito para dias quentes.",
    ingredientes: [
      "4 polpas de maracujá (aprox. 4 maracujás)",
      "600 ml de água gelada",
      "3 colheres (sopa) de açúcar",
      "Folhas de hortelã a gosto",
      "Gelo",
    ],
    preparo:
      "Bata a polpa do maracujá com um pouco de água. Coe, misture o restante da água, o açúcar e folhas de hortelã. Sirva gelado.",
  },
  {
    titulo: "Watermelemonade",
    imagem:
      "https://www.simplyrecipes.com/thmb/Q8ldhJ_dcMMS5TyD3G6TIYpIbAA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simply-recipes-watermelonade-lead-1-cd1502c65502404dbe3b1a3fd35dd275.jpg",
    categoria: "Bebida",
    descricao:
      "Versão leve e doce de limonada usando melancia em vez de açúcar.",
    ingredientes: [
      "4 xícaras de melancia sem sementes, picada",
      "Suco de 2 limões",
      "Gelo a gosto",
    ],
    preparo:
      "Bata a melancia até virar purê. Coe se quiser mais leve. Misture o suco de limão, aqueça e sirva com gelo.",
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
            className="w-3xl float-left mr-4 rounded-4xl shadow-2xl hover:scale-101 transition"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 shadow">
          {receitasDestaque.map((receita, index) => {
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

      <section>
        <h1 className="text-3xl  text-white font-bold my-10 text-center m-auto bg-amber-950 w-fit rounded-3xl p-3">
          Sucos 5 estrelas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {receitasSucos.map((receita, index) => {
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

      <section className="flex flex-col relative my-10 ">
        <div className="p-5 rounded-2xl">
          <img
            src="https://cdn.abrahao.com.br/base/606/0d0/202/chefe-cozinha-profissional.jpg"
            alt=""
            className="w-3xl float-right mt-12 ml-2 rounded-2xl shadow-2xl hover:scale-101 transition"
          />
          <h1 className="flex justify-center text-3xl text-white font-bold bg-amber-500 rounded-3xl w-fit m-auto p-2  mt-10">
            Nome: Isabella Conti Montalvo
          </h1>

          <h3 className="mt-5 text-center text-2xl font-semibold">
            Receita da Mestra!
          </h3>
          <p className=" text-xl text-wrap mt-2.5">
            Isabella Conti Montalvo é uma confeiteira de destaque, com mais de
            12 anos de experiência em alta confeitaria. Especializada em bolos
            artísticos e sobremesas finas, Isabella combina técnicas clássicas —
            como temperagem de chocolate, massa folhada e laminação — com um
            senso estético refinado e criatividade contínua. Ela é conhecida por
            sua atenção aos detalhes: cada elemento decorativo é planejado,
            medido e executado com precisão milimétrica. Isabella também
            demonstra resistência física e destreza manual, suportando longas
            horas no pré-preparo e montagem de peças elaboradas. Além disso,
            Isabella exibe uma forte criatividade, seja ao reinventar receitas
            tradicionais com toques modernos, seja ao explorar combinações
            inesperadas de sabores e texturas. Sua experiência inclui liderança
            de equipe e desenvolvimento de novos cardápios personalizados para
            eventos especiais — sempre mantendo altos padrões de higiene,
            organização e planejamento operacional.
          </p>
        </div>
      </section>
    </div>
  );
}
