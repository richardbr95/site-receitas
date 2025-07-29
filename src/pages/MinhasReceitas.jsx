import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
  const [imagem, setImagem] = useState("");

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
        rec.id === idEditando
          ? { ...rec, titulo, imagem, ingredientes, preparo }
          : rec
      );

      dados[usuario] = atualizadas;
      localStorage.setItem("receitasPorUsuario", JSON.stringify(dados));
      setReceitas(atualizadas);

      setTitulo("");
      setIngredientes("");
      setPreparo("");
      setImagem("");
      setMostrarFormulario(false);
      setModoEdicao(false);
      setIdEditando(null);
    } else {
      const nova = {
        id: crypto.randomUUID(),
        titulo,
        imagem,
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
      setImagem("");
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
    setImagem(receita.imagem || "");
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
          className="bg-white border-cyan-950 rounded-lg shadow-md p-4 my-8 space-y-4 w-full max-w-[38rem] mx-auto flex flex-col px-8"
        >
          {modoEdicao && imagem && (
            <img
              src={imagem}
              alt={titulo}
              className="w-full h-64 object-cover rounded-4xl mb-4"
            />
          )}
          <input
            className="border-cyan-950 shadow-md rounded-xl px-2"
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={(e) => {
              setTitulo(e.target.value);
            }}
            required
          />
          <input
            className="border-cyan-950 shadow-md rounded-xl px-2"
            type="text"
            placeholder="Url da imagem"
            value={imagem}
            onChange={(e) => {
              setImagem(e.target.value);
            }}
          />

          <textarea
            placeholder="Ingredientes"
            value={ingredientes}
            onChange={(e) => {
              setIngredientes(e.target.value);
            }}
            className="resize-none border-cyan-950 shadow-md p-2 rounded"
            required
          />
          <textarea
            placeholder="Modo de preparo"
            value={preparo}
            onChange={(e) => {
              setPreparo(e.target.value);
            }}
            className="resize-none border-cyan-950 shadow-md p-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-orange-500 text-white
          px-6 py-2 rounded-4xl hover:border-orange-600 w-fit mx-auto"
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
              className="bg-white p-4 border-b-cyan-950 rounded shadow-md relative my-5"
            >
              {rec.imagem && (
                <img
                  src={rec.imagem}
                  alt={rec.titulo}
                  className="max-w-20 h-10 object-cover rounded-md shadow-md mb-4 absolute right-2 bottom-0"
                />
              )}
              <h2 className="font-bold text-lg text-orange-700">
                {rec.titulo}
              </h2>
              <p className="mt-1">
                <strong>Ingredientes:</strong> {rec.ingredientes}
              </p>
              <p className="mt-1">
                <strong>Modo de Preparo:</strong> {rec.preparo}
              </p>
              <Link
                to={`/receita/${rec.id}`}
                className="mt-auto text-sm text-blue-600 hover:underline"
              >
                Ver receita →
              </Link>
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
