import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Receitas 🍲
        </Link>
        <nav className="space-x-4">
          <Link to="/categoria/Café da manhã" className="hover:text-green-600">
            Café da Manhã
          </Link>
          <Link to="/categoria/Almoço" className="hover:text-green-600">
            Almoço
          </Link>
          <Link to="/categoria/Sobremesa" className="hover:text-green-600">
            Sobremesa
          </Link>
        </nav>
        {/* Fututo botão modo escuro*/}
      </div>
    </header>
  );
}
