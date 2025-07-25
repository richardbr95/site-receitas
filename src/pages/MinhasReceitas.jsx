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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Minhas Receitas</h1>
      <p>Olá, {usuario}! Aqui você pode adicionar suas receitas futuramente.</p>
      {/* Em breve: listagem e criação de receitas do usuário */}
    </div>
  );
}
