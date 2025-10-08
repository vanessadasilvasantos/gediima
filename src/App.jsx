import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import About from './pages/About';
import Board from './pages/Board';
import Join from './pages/Join';
import Logo from './assets/Logo-Gedima.jpg';
import Button from './components/button';
import Footer from './components/Footer';
import Schedule from './pages/Schedule';
import Enrollment from './pages/Enrollment';

function LayoutWithNav() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path) => location.pathname === path;

  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="flex justify-between md:justify-around items-center py-4 px-6 shadow-sm bg-white relative z-50">
        <Link to="/" onClick={handleLinkClick}>
          <img src={Logo} alt="Logo Gedima" className="h-12 w-auto" />
        </Link>

        <button
          className="md:hidden text-[#154d7b] cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-6 text-[#154d7b] font-medium">
            <Link
              to="/"
              className={`transition relative pb-1 ${
                isActive("/") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#cf4033] after:transition-all after:duration-300 ${
                isActive("/") ? "after:w-full" : "after:w-0 hover:after:w-full"
              }`}
            >
              Sobre
            </Link>

            <Link
              to="/programacao"
              className={`transition relative pb-1 ${
                isActive("/programacao") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#cf4033] after:transition-all after:duration-300 ${
                isActive("/programacao")
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              Programação
            </Link>

            <Link
              to="/diretoria"
              className={`transition relative pb-1 ${
                isActive("/diretoria") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#cf4033] after:transition-all after:duration-300 ${
                isActive("/diretoria")
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              Diretoria
            </Link>

            <Link
              to="/associa-se"
              className={`transition relative pb-1 ${
                isActive("/associa-se") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#cf4033] after:transition-all after:duration-300 ${
                isActive("/associa-se")
                  ? "after:w-full"
                  : "after:w-0 hover:after:w-full"
              }`}
            >
              Associe-se
            </Link>
          </div>

          <Button text="Inscrição" onClick={() => navigate("/inscricao")} />
        </div>

        {/* Menu mobile (visível ao clicar) */}
        {isOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white border-t border-gray-100 shadow-md flex flex-col items-center py-6 gap-5 md:hidden animate-fade-in">
            <Link
              to="/"
              onClick={handleLinkClick}
              className={`text-[#154d7b] text-lg ${
                isActive("/") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              }`}
            >
              Sobre
            </Link>
            <Link
              to="/programacao"
              onClick={handleLinkClick}
              className={`text-[#154d7b] text-lg ${
                isActive("/programacao") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              }`}
            >
              Programação
            </Link>
            <Link
              to="/diretoria"
              onClick={handleLinkClick}
              className={`text-[#154d7b] text-lg ${
                isActive("/diretoria") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              }`}
            >
              Diretoria
            </Link>
            <Link
              to="/associa-se"
              onClick={handleLinkClick}
              className={`text-[#154d7b] text-lg ${
                isActive("/associa-se") ? "text-[#cf4033]" : "hover:text-[#cf4033]"
              }`}
            >
              Associe-se
            </Link>
            <Button
              text="Inscrição"
              onClick={() => {
                navigate("/inscricao");
                setIsOpen(false);
              }}
              className="mt-2"
            />
          </div>
        )}
      </nav>

      {/* Conteúdo principal */}
      <main className="flex-1 flex justify-center py-10">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/programacao" element={<Schedule />} />
          <Route path="/diretoria" element={<Board />} />
          <Route path="/inscricao" element={<Enrollment />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Páginas com navbar e footer */}
        <Route path="/*" element={<LayoutWithNav />} />

        {/* Páginas isoladas (sem nav/footer) */}
        <Route path="/associa-se" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;
