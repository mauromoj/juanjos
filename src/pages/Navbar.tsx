import logo from '../assets/logo.png'; // coloca aquí la imagen del logo

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-white shadow-md">
      <img src={logo} alt="Juanjo's House" className="h-12" />
      <ul className="hidden md:flex gap-6 font-medium">
        <li><a href="#burgers">Hamburguesas</a></li>
        <li><a href="#entrantes">Entrantes</a></li>
        <li><a href="#ubicacion">Ubicación</a></li>
      </ul>
    </nav>
  );
}