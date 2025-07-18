import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div>
        <Link to="/" className="text-xl font-bold">
          Receitas 🍲
        </Link>
        {/* Fututo botão modo escuro*/}
      </div>
    </header>
  );
}
