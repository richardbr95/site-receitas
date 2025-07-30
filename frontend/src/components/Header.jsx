import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../assets/logoRE.png";
import { FaUserCircle } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { PiNewspaper } from "react-icons/pi";
import { useState } from "react";

export default function Header() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();
  const [menuAberto, setMenuAberto] = useState(false);

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
    <header className="bg-white shadow p-1 md:max-h-24 overflow-hidden">
      <div className="container mx-auto flex items-center justify-between flex-wrap ">
        <Link to="/" className="text-4xl font-bold ">
          <img
            src={LogoImg}
            alt="Logo ReceitasRE"
            className="h-16 w-auto object-contain rounded-xl"
          />
        </Link>
        <button
          className="md:hidden text-3xl mr-6"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>
        <nav
          className={` ${menuAberto ? "flex" : "hidden"}  
        w-full md:w-auto mt-4 md:mt-0 flex-col md:flex md:flex-row gap-4 items-center mb-4 md:mb-0 sm:mb-4 
        `}
        >
          {categorias.map((cat) => (
            <Link
              key={cat}
              to={`/categoria/${slugify(cat)}`}
              className="hover:text-green-600 text-xl"
              onClick={() => setMenuAberto(false)}
            >
              {cat}
            </Link>
          ))}

          {usuario ? (
            <>
              <Link
                to="/minhas-receitas"
                className="text-xl hover:text-green-600 relative top-0.5"
                onClick={() => setMenuAberto(false)}
              >
                <PiNewspaper />
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setMenuAberto(false);
                }}
                className={`text-red-600 hover:text-red-800  relative top-0.5 mb-0`}
              >
                <MdLogout />
              </button>
            </>
          ) : (
            <Link to="/login" onClick={() => setMenuAberto(false)}>
              <FaUserCircle className="text-2xl hover:text-orange-500 transition relative top-0.5" />
            </Link>
          )}
        </nav>
        {/* Fututo botão modo escuro*/}
      </div>
    </header>
  );
}
