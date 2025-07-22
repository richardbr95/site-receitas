import { Link } from "react-router-dom";
import LogoImg from "../assets/logoRE.png";

export default function Header() {
  function slugify(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s+/g, "-");
  }

  const categorias = ["Café da Manhã", "Almoço", "Sobremesa"];

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
        <nav className="space-x-4">
          {categorias.map((cat) => (
            <Link
              key={cat}
              to={`/categoria/${slugify(cat)}`}
              className="hover:text-green-600 text-xl"
            >
              {cat}
            </Link>
          ))}
        </nav>
        {/* Fututo botão modo escuro*/}
      </div>
    </header>
  );
}
