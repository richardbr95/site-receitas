import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../assets/logoRE.png";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../contexts/AuthContext";
import { MdLogout } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";

export default function Header() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }

  function slugify(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  const categorias = ["Café da Manhã", "Almoço", "Sobremesa", "Bebida"];

  return (
    <header className="bg-white shadow p-8">
      <div className="container relative mx-auto flex items-center justify-end ">
        <Link to="/" className="text-4xl font-bold absolute left-0">
          <img
            src={LogoImg}
            alt="Logo ReceitasRE"
            className="h-auto w-auto object-contain rounded-xl"
          />
        </Link>
        <nav className="space-x-4 flex">
          {categorias.map((cat) => (
            <Link
              key={cat}
              to={`/categoria/${slugify(cat)}`}
              className="hover:text-green-600 text-xl"
            >
              {cat}
            </Link>
          ))}

          {usuario ? (
            <>
              <Link
                to="/minhas-receitas"
                className="text-xl hover:text-green-600 relative top-1"
              >
                <PiNewspaper />
              </Link>
              <button
                onClick={handleLogout}
                className=" text-red-600 hover:text-red-800 text-sm ml-2"
              >
                <MdLogout />
              </button>
            </>
          ) : (
            <Link to="/login">
              <FaUserCircle className="text-2xl hover:text-orange-500 transition absolute top-0.5" />
            </Link>
          )}
        </nav>
        {/* Fututo botão modo escuro*/}
      </div>
    </header>
  );
}
