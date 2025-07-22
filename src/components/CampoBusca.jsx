import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CampoBusca() {
  const [busca, setBusca] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (busca.trim() !== "") {
      navigate(`/buscar/${busca}`);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6 flex justify-center">
      <input
        type="text"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        placeholder="Buscar Receita"
        className="border border-gray-300 rounded-l-md px-4 py-2 w-64
        focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded-r-md hover:bg-green-600 transition"
      >
        Buscar
      </button>
    </form>
  );
}
