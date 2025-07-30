import { Link } from "react-router-dom";

export default function CardReceita({ id, titulo, imagem, categoria }) {
  const imagemFinal =
    imagem ||
    "https://sindicfcmg.org.br/wp-content/uploads/2024/08/sem-imagem11-1.jpg";
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.03] transition h-[320px] duration-300 flex flex-col">
      <img
        src={imagemFinal}
        alt={titulo}
        className="w-full h-44 object-cover"
      />

      <div className="p-4 flex-grow flex flex-col ">
        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full uppercase font-medium w-fit">
          {categoria}
        </span>
        <h3 className="text-xl font-bold mt-2 mb-1 break-words overflow-hidden max-h-15">
          {titulo}
        </h3>
        <Link
          to={`/receita/${id}`}
          className="mt-auto text-sm text-blue-600 hover:underline"
        >
          Ver receita →
        </Link>
      </div>
    </div>
  );
}
