import { useParams } from "react-router-dom";

export default function Categoria() {
  const { categoria } = useParams();

  return <h1 className="text-3xl font-bold">Categoria: {categoria}</h1>;
}
