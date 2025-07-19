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
