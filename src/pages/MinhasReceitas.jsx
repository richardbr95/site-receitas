import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MinhasReceitas() {
  const navigate = useNavigate();
  const usuario = localStorage.getItem("usuarioLogado");

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    }
  }, [usuario, navigate]);
  return (
    <div className="">
      <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-amber-800 m-auto w-fit p-3 px-4 rounded-3xl text-white">
        Minhas Receitas
      </h1>
      <p className="text-xl text-justify flex justify-center items-center">
        Olá, {usuario}! Aqui você pode adicionar suas receitas futuramente.
      </p>
      {/* Em breve: listagem e criação de receitas do usuário */}
    </div>
  );
}
