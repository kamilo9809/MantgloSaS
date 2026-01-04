import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Importa Link
import logo from "../../../assets/logoMantglo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const styleNavOption =
    "hover:text-yellow-400 cursor-pointer transition-colors";

  return (
    <nav className="w-full bg-[#f5f5f5] fixed top-0 z-50 shadow-md">
      <div className="w-full h-24 flex justify-between items-center px-6 md:px-10 max-w-[1400px] mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="h-12 md:h-14" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li>
            <Link to="/" className={styleNavOption}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/servicios" className={styleNavOption}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/nosotros" className={styleNavOption}>
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/contactanos" className={styleNavOption}>
              Contáctanos
            </Link>
          </li>
        </ul>

        {/* Botón */}
        <div className="hidden md:block">
          <a href="tel:3135843579">
            <button className="bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors">
              ¡LLÁMANOS! <span>313 584 3579</span>
            </button>
          </a>
        </div>

        {/* Botón hamburguesa (solo móvil/tablet) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móvil */}
      {open && (
        <div className="md:hidden bg-[#f5f5f5] shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            <li>
              <Link to="/" className={styleNavOption} onClick={() => setOpen(false)}>
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/servicios" className={styleNavOption} onClick={() => setOpen(false)}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className={styleNavOption} onClick={() => setOpen(false)}>
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contactanos" className={styleNavOption} onClick={() => setOpen(false)}>
                Contáctanos
              </Link>
            </li>
            <li>
              <a href="tel:3135843579">
                <button className="bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors">
                  ¡LLÁMANOS! <span>313 584 3579</span>
                </button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
