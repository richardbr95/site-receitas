import { Link } from "react-router-dom";

export default function CardReceita({ titulo, imagem, categoria }) {
  return (
    <Link to={`/receita/${titulo}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition h-[320px] duration-300 flex flex-col">
        <img src={imagem} alt={titulo} className="w-full h-44 object-cover" />
        <div className="p-4 ">
          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full uppercase font-medium">
            {categoria}
          </span>
          <h3 className="text-xl font-bold mt-2 mb-1">{titulo}</h3>
          <button className="mt-2 text-sm text-blue-600 hover:underline">
            Ver receita →
          </button>
        </div>
      </div>
    </Link>
  );
}
