import CardReceita from "../components/CardReceita";
import { useAuth } from "../hooks/useAuth";
import receitasEmDestaque from "../data/receitasEmDestaque";
import sucosCincoEstrelas from "../data/sucosCincoEstrelas";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const { usuario } = useAuth();
  const [quantidadeVisivel, setQuantidadeVisivel] = useState(6);

  const dados = JSON.parse(localStorage.getItem("receitasPorUsuario") || "{}");
  const minhasReceitas = dados[usuario] || [];
  const carregarMais = () => {
    setQuantidadeVisivel((prev) => prev + 6);
  };

  return (
    <div>
      <section className="flex flex-col relative mb-10 mt-12">
        <div>
          <img
            src=" https://cdn-productdbimages.barry-callebaut.com/sites/default/files/styles/mdp_web_gm_chocac-detail/public/externals/d73ed7c82007f2c7d6b1615a80920207.jpg?itok=p8W4PzRn"
            alt=""
            className="w-3xl md:float-left float-none sm:float-none mr-10 mb-12 rounded-4xl shadow-2xl hover:scale-101 transition"
          />
          <h1 className="flex justify-center text-3xl text-white font-bold bg-amber-800 rounded-3xl w-fit m-auto py-3 px-4  mt-10 select-none">
            Receita do Mestre!
          </h1>

          <h3 className="mt-5 text-center text-2xl font-semibold">
            🎂 Conheça o Mestre dos Bolos: Lorenzo Bianchi
          </h3>
          <p className=" text-xl text-justify mt-2.5">
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

      <section className="mt-20">
        <h1 className="text-3xl text-white font-bold my-10 text-center m-auto bg-amber-500 w-fit rounded-3xl py-3 px-4 select-none">
          Receitas em Destaque
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {receitasEmDestaque.map((receita, index) => {
            return (
              <CardReceita
                key={index}
                id={receita.id}
                titulo={receita.id}
                imagem={receita.imagem}
                categoria={receita.categoria}
              />
            );
          })}
        </div>
      </section>

      {usuario && minhasReceitas.length > 0 && (
        <section className="mt-20">
          <h1 className="text-3xl text-white font-bold my-10 text-center m-auto bg-red-600 w-fit rounded-3xl py-3 px-4 select-none">
            Minhas Receitas
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {minhasReceitas
              .slice(0, quantidadeVisivel)
              .map((receita, index) => {
                return (
                  <CardReceita
                    key={index}
                    id={receita.id}
                    titulo={receita.id}
                    imagem={receita.imagem}
                    categoria={receita.categoria}
                  />
                );
              })}
          </div>
          <div className="flex justify-center ">
            {quantidadeVisivel < minhasReceitas.length && (
              <button
                onClick={carregarMais}
                className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-3xl hover:bg-orange-600 mx-auto"
              >
                Carregar Mais
              </button>
            )}
          </div>
        </section>
      )}

      <section className="mt-20">
        <h1 className="text-3xl  text-white font-bold my-10 text-center m-auto bg-amber-950 w-fit rounded-3xl py-3 px-4 select-none">
          Sucos 5 estrelas
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sucosCincoEstrelas.map((receita, index) => {
            return (
              <CardReceita
                key={index}
                id={receita.id}
                titulo={receita.id}
                imagem={receita.imagem}
                categoria={receita.categoria}
              />
            );
          })}
        </div>
      </section>

      <section className="flex flex-col relative mt-12 ">
        <div className="p-5 rounded-2xl">
          <img
            src="https://cdn.abrahao.com.br/base/606/0d0/202/chefe-cozinha-profissional.jpg"
            alt=""
            className="w-3xl float-right mt-12 ml-12  mb-12 rounded-2xl shadow-2xl hover:scale-101 transition"
          />
          <h1 className="flex justify-center text-3xl  text-white font-bold bg-amber-800 rounded-3xl w-fit m-auto py-3 px-4  mt-10 select-none">
            Nome: Isabella Conti Montalvo
          </h1>

          <h3 className="mt-5 text-center text-2xl font-semibold">
            Receita da Mestra!
          </h3>
          <p className="text-xl text-justify mt-2.5">
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

      {!usuario && (
        <section className="mt-20">
          <h1 className="flex justify-center text-3xl  text-white font-bold bg-amber-800 rounded-3xl w-fit m-auto py-3 px-4  my-10 select-none">
            Crie Receitas Personalizadas!!
          </h1>
          <div className="flex flex-col  border-b-cyan-300 rounded-2xl mx-auto w-fit shadow-xl">
            <div className="max-w-3xl p-6 mx-auto text-center">
              <h3 className="my-5 text-center text-2xl font-semibold">
                Recursos Exclusivos
              </h3>
              <p className="text-xl text-justify text-wrap">
                Já pensou em ter um espaço só seu para guardar e organizar suas
                receitas favoritas? Na{" "}
                <span className="font-semibold text-orange-600">
                  ReceitasRe
                </span>
                , você pode! Acesse a aba <strong>Minhas Receitas</strong> e
                comece agora mesmo.
              </p>
              <Link
                to="/minhas-receitas"
                className="inline-block bg-orange-500 text-white font-medium px-6 py-2 text-xl rounded-full hover:bg-orange-600 transition my-5"
              >
                Minhas Receitas
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
