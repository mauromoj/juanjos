import { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-4 py-4">
      <div className="flex items-center justify-between">
        <img src={logo} alt="Juanjo's House" className="h-12" />

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-3xl text-[#e63946]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navegación en pantallas grandes */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/">Hamburguesas</Link></li>
          <li><Link to="/entrantes">Entrantes</Link></li>
          <li><Link to="/nosotros">Sobre Nosotros</Link></li>
        </ul>
      </div>

      {/* Menú móvil animado */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          isOpen ? "max-h-40 mt-4" : "max-h-0"
        }`}
      >
        <ul
          className={`flex flex-col gap-4 font-medium transform transition-all duration-500 ease-out ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <li><Link to="/" onClick={() => setIsOpen(false)}>Hamburguesas</Link></li>
          <li><Link to="/entrantes" onClick={() => setIsOpen(false)}>Entrantes</Link></li>
          <li><Link to="/nosotros" onClick={() => setIsOpen(false)}>Sobre Nosotros</Link></li>
        </ul>
      </div>
    </nav>
  );
}
