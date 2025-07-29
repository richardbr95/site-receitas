import boloImg from "../assets/bolo-de-chocolate-facil.jpg";

const receitasEmDestaque = [
  {
    id: "panqueca-americana",
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
    preparo: "Misture todos os ingredientes até obter uma massa homogênea.",
  },
  {
    id: "macarrao-alho-oleo",
    titulo: "Macarrão ao Alho e Óleo",
    imagem:
      "https://www.receiteria.com.br/wp-content/uploads/macarrao-alho-e-oleo-capa.png",
    categoria: "Almoço",
    descricao: "Macarrão com alho tostado em azeite — simples e saboroso.",
    ingredientes: [
      "250 g de macarrão de sua preferência",
      "4 dentes de alho fatiados",
      "3 colheres (sopa) de azeite de oliva",
      "Salsinha picada a gosto",
      "Sal e pimenta-do-reino a gosto",
    ],
    preparo:
      "Cozinhe o macarrão conforme instruções. Em uma frigideira, aqueça o azeite e doure o alho. Misture ao macarrão escorrido, tempere e finalize com salsinha.",
  },
  {
    id: "bolo-chocolate",
    titulo: "Bolo de Chocolate",
    imagem: boloImg,
    categoria: "Sobremesa",
    descricao: "Bolo macio e úmido, com cobertura de chocolate.",
    ingredientes: [
      "2 xícaras de açúcar",
      "3 xícaras de farinha de trigo",
      "1 xícara de chocolate em pó",
      "4 ovos",
      "1 xícara de leite",
      "1 colher (sopa) de fermento em pó",
    ],
    preparo:
      "Bata todos os ingredientes no liquidificador, despeje em forma untada e asse a 180 °C por cerca de 35 minutos.",
  },
];
export default receitasEmDestaque;
