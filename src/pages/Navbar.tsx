import { Link } from "react-router-dom";
import logo from '../assets/logo.png'; // coloca aquí la imagen del logo

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <img src={logo} alt="Juanjo's House" className="h-12" />
      <ul className="hidden md:flex gap-6 font-medium">
        <li><Link to="/">Hamburguesas</Link></li>
        <li><Link to="/entrantes">Entrantes</Link></li>
      </ul>
    </nav>
  );
}