import boloImg from "../assets/bolo-de-chocolate-facil.jpg";

const receitasEstaticas = [
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
  {
    id: "suco-abacaxi-limao",
    titulo: "Suco de Abacaxi com Limão",
    imagem:
      "https://images.mrcook.app/recipe-image/0192681f-e0ba-71cd-b260-94309ea9d70b?cacheKey=U3VuLCAxMiBKYW4gMjAyNSAwMzozODoyNCBHTVQ=",
    categoria: "Bebida",
    descricao:
      "Refrescante combinação tropical de abacaxi doce com toque cítrico.",
    ingredientes: [
      "2 xícaras de abacaxi picado",
      "1/2 xícara de suco de limão fresco",
      "2 colheres (sopa) de açúcar",
      "500 ml de água gelada",
      "Gelo a gosto",
    ],
    preparo:
      "Bata o abacaxi, o suco de limão, o açúcar e a água no liquidificador. Sirva com gelo.",
  },
  {
    id: "suco-maracuja-hortela",
    titulo: "Suco de Maracujá com Hortelã",
    imagem:
      "https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2016/05/suco-de-maracuja-manga-e-hortela-12949.jpg?w=566&ssl=1",
    categoria: "Bebida",
    descricao: "Suco cítrico de maracujá com o frescor da hortelã.",
    ingredientes: [
      "4 polpas de maracujá",
      "600 ml de água gelada",
      "3 colheres (sopa) de açúcar",
      "Folhas de hortelã a gosto",
    ],
    preparo:
      "Bata a polpa do maracujá com água, coe se preferir, adoce, adicione hortelã e sirva gelado.",
  },
  {
    id: "watermelemonade",
    titulo: "Watermelemonade",
    imagem:
      "https://www.simplyrecipes.com/thmb/Q8ldhJ_dcMMS5TyD3G6TIYpIbAA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simply-recipes-watermelonade-lead-1-cd1502c65502404dbe3b1a3fd35dd275.jpg",
    categoria: "Bebida",
    descricao: "Limonada doce feita com melancia.",
    ingredientes: [
      "4 xícaras de melancia picada",
      "Suco de 2 limões",
      "Gelo a gosto",
    ],
    preparo:
      "Bata a melancia até virar purê, coe se preferir, misture o limão e sirva com gelo.",
  },
];

export default receitasEstaticas;
