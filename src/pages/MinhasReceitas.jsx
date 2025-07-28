import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MinhasReceitas() {
  const navigate = useNavigate();
  const usuario = localStorage.getItem("usuarioLogado");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [ingredientes, setIngredientes] = useState("");
  const [preparo, setPreparo] = useState("");
  const [receitas, setReceitas] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [idEditando, setIdEditando] = useState(null);

  useEffect(() => {
    if (!usuario) {
      navigate("/login");
    } else {
      const dados =
        JSON.parse(localStorage.getItem("receitasPorUsuario")) || "{}";
      setReceitas(dados[usuario] || []);
    }
  }, [usuario, navigate]);

  function salvarOuEditarReceita(e) {
    e.preventDefault();

    const dados =
      JSON.parse(localStorage.getItem("receitasPorUsuario")) || "{}";
    const receitasUsuario = dados[usuario] || [];

    if (modoEdicao) {
      const atualizadas = receitasUsuario.map((rec) =>
        rec.id === idEditando ? { ...rec, titulo, ingredientes, preparo } : rec
      );

      dados[usuario] = atualizadas;
      localStorage.setItem("receitasPorUsuario", JSON.stringify(dados));
      setReceitas(atualizadas);

      setTitulo("");
      setIngredientes("");
      setPreparo("");
      setMostrarFormulario(false);
      setModoEdicao(false);
      setIdEditando(null);
    } else {
      const nova = {
        id: crypto.randomUUID(),
        titulo,
        ingredientes,
        preparo,
      };
      const dados = JSON.parse(
        localStorage.getItem("receitasPorUsuario") || "{}"
      );
      const receitasUsuario = dados[usuario] || [];

      const novasReceitas = [...receitasUsuario, nova];
      dados[usuario] = novasReceitas;

      localStorage.setItem("receitasPorUsuario", JSON.stringify(dados));
      setReceitas(novasReceitas);

      setTitulo("");
      setIngredientes("");
      setPreparo("");
      setMostrarFormulario(false);
      setModoEdicao(false);
      setIdEditando(null);
    }
  }

  function excluirReceita(id) {
    const dados =
      JSON.parse(localStorage.getItem("receitasPorUsuario")) || "{}";
    const receitasUsuario = dados[usuario] || [];

    const atualizadas = receitasUsuario.filter((r) => r.id !== id);
    dados[usuario] = atualizadas;

    localStorage.setItem("receitasPorUsuario", JSON.stringify(dados));
    setReceitas(atualizadas);
  }

  function iniciarEdicao(receita) {
    setTitulo(receita.titulo);
    setIngredientes(receita.ingredientes);
    setPreparo(receita.preparo);
    setModoEdicao(true);
    setIdEditando(receita.id);
    setMostrarFormulario(true);
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-10 text-center my-4 bg-amber-800 m-auto w-fit p-3 px-4 rounded-3xl text-white select-none">
        Minhas Receitas
      </h1>

      <p className="text-xl text-justify flex justify-center items-center">
        Olá, {usuario}! Aqui você pode adicionar suas receitas futuramente.
      </p>

      <div className="flex justify-center mb-6 mt-6">
        {!modoEdicao && (
          <button
            onClick={() => {
              setMostrarFormulario(!mostrarFormulario);
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition"
          >
            {mostrarFormulario ? "Cancelar" : "Nova Receita"}
          </button>
        )}
      </div>

      {mostrarFormulario && (
        <form
          onSubmit={salvarOuEditarReceita}
          className="bg-white border rounded-lg shadow-md p-4 mb-8 space-y-4"
        >
          <input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
            required
          />
          <textarea
            placeholder="Ingredientes"
            value={ingredientes}
            onChange={(e) => {
              setIngredientes(e.target.value);
            }}
            className="w-full border p-2 rounded"
            required
          />
          <textarea
            placeholder="Modo de preparo"
            value={preparo}
            onChange={(e) => {
              setPreparo(e.target.value);
            }}
            className="w-full border p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white
          px-6 py-2 rounded hover:border-orange-600"
          >
            {modoEdicao ? "Atualizar Receita" : "Salvar Receita"}
          </button>
        </form>
      )}
      {receitas.length > 0 ? (
        <ul>
          {receitas.map((rec) => (
            <li
              key={rec.id}
              className="bg-white p-4 border rounded shadow-md relative my-5"
            >
              <h2 className="font-bold text-lg text-orange-700">
                {rec.titulo}
              </h2>
              <p className="mt-1">
                <strong>Ingredientes:</strong> {rec.ingredientes}
              </p>
              <p className="mt-1">
                <strong>Modo de Preparo:</strong> {rec.preparo}
              </p>
              <div className="flex gap-2 absolute top-2 right-2">
                <button
                  onClick={() => iniciarEdicao(rec)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-4xl"
                >
                  Editar
                </button>
                <button
                  onClick={() => excluirReceita(rec.id)}
                  className=" bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-4xl"
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-600">
          Nenhuma receita cadastrada ainda.
        </p>
      )}
    </div>
  );
}
