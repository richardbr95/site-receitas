import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Detalhes from "./pages/DetalhesReceita";

import Buscar from "./pages/Buscar";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MinhasReceitas from "./pages/MinhasReceitas";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categoria/:categoria" element={<Categoria />} />
            <Route path="/receita/:slug" element={<Detalhes />} />
            <Route path="/buscar/:termo" element={<Buscar />} />
            <Route path="/login" element={<Login />} />
            <Route path="/minhas-receitas" element={<MinhasReceitas />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
