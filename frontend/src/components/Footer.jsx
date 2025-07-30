export default function Footer() {
  return (
    <div>
      <footer className="bg-gray-200 text-center p-4 mt-8">
        © {new Date().getFullYear()} Site de Receitas. Todos os direitos
        reservados.
      </footer>
    </div>
  );
}
