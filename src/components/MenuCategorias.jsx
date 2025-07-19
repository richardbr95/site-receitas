import { Link } from "react-router-dom";

const categorias = ["Café da Manhã", "Almoço", "Sobremesa"];

function slugify(texto) {
  return texto
    .normalize("NFD") // Normaliza acentos
    .replace(/[\u0300-\u036f]/g, "") // Remove acentos
    .toLowerCase()
    .replace(/\s+/g, "-"); // Substitui espaços por hífens
}

export default function MenuCategorias() {
  return (
    <nav>
      {categorias.map((cat) => {
        const slug = slugify(cat);
        return (
          <Link
            key={cat}
            to={`/categoria/${slug}`}
            className="text-blue-500 hover:underline font-medium"
          >
            {cat}
          </Link>
        );
      })}
    </nav>
  );
}
