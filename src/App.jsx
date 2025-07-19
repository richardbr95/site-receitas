import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Detalhes from "./pages/DetalhesReceita";
import MenuCategorias from "./components/MenuCategorias";
import Buscar from "./pages/Buscar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <MenuCategorias />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<Categoria />} />
            <Route path="/receita/:titulo" element={<Detalhes />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/buscar/:termo" element={<Buscar />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
