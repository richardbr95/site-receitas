import { useParams } from "react-router-dom";
import CardReceita from "../components/CardReceita";
import boloImg from "../assets/bolo-de-chocolate-facil.jpg";

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
const categorias = ["Café da Manhã", "Almoço", "Sobremesa", "Bebida"];
function desslugify(slug) {
  return categorias.find(
    (cat) =>
      slug ===
      cat
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/\s+/g, "-")
  );
}

export default function Categoria() {
  const { categoria } = useParams();
  const nomeOriginal = desslugify(categoria);
  const receitasFiltradas = receitas.filter((r) => {
    return r.categoria === nomeOriginal;
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
      <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-amber-600 m-auto w-fit p-2 px-3 rounded-3xl text-white">
        Categoria: {nomeOriginal || categoria}
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
