import { useParams } from "react-router-dom";
import boloImg from "../assets/bolo-de-chocolate-facil.jpg";
import { useNavigate } from "react-router-dom";

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

export default function Detalhes() {
  const { titulo } = useParams();
  const receita = receitas.find((r) => {
    return r.titulo === titulo;
  });
  const navigate = useNavigate();

  if (!receita) {
    return <p className="text-red-500">Receita não encontrada.</p>;
  }
  return (
    <div className="max-w-3xl mx-auto p-4">
      <button
        onClick={() => {
          return navigate(-1);
        }}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Voltar
      </button>

      <h1 className="text-3xl font-bold mb-4">{receita.titulo}</h1>
      <img
        src={receita.imagem}
        alt={receita.titulo}
        className="w-full h-64 object-cover rounded-xl shadow"
      />
      <p className="text-gray-500 my-2 italic">
        Categoria: {receita.categoria}
      </p>
      <p className="text-lg mb-4">{receita.descricao}</p>

      <h2 className="text-xl font-semibold mb-2">Ingredientes</h2>
      <ul className="list-disc list-inside mb-4">
        {receita.ingredientes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mb-2">Modo de Preparo</h2>
      <p>{receita.preparo}</p>
    </div>
  );
}
