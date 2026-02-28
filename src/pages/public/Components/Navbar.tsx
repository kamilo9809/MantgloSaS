import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logoMantglo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const styleNavOption =
    "hover:text-yellow-400 cursor-pointer transition-colors";

  return (
    <nav className="w-full bg-[#f5f5f5] fixed top-0 z-50 shadow-md">
      <div className="w-full h-24 flex justify-between items-center px-6 md:px-10 max-w-[1400px] mx-auto">
        <div className="flex items-center">
          <Link to="/" aria-label="Ir al inicio">
            <img src={logo} alt="Logo Mantglo" className="h-12 md:h-14" loading="eager" decoding="async" width={100} height={80} />
          </Link>
        </div>

        <ul className="hidden md:flex gap-10 text-lg font-medium">
          <li><Link to="/" className={styleNavOption}>Inicio</Link></li>
          <li><Link to="/servicios" className={styleNavOption}>Servicios</Link></li>
          <li><Link to="/nosotros" className={styleNavOption}>Nosotros</Link></li>
          <li><Link to="/contactanos" className={styleNavOption}>Contáctanos</Link></li>
        </ul>

        <div className="hidden md:block">
          <a
            href="tel:3135843579"
            className="bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors inline-block"
            aria-label="Llamar al 313 584 3579"
          >
            ¡LLÁMANOS! <span>313 584 3579</span>
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          aria-expanded={open}
          aria-controls="menu-movil"
          type="button"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div id="menu-movil" className="md:hidden bg-[#f5f5f5] shadow-lg">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg font-medium">
            <li><Link to="/" className={styleNavOption} onClick={() => setOpen(false)}>Inicio</Link></li>
            <li><Link to="/servicios" className={styleNavOption} onClick={() => setOpen(false)}>Servicios</Link></li>
            <li><Link to="/nosotros" className={styleNavOption} onClick={() => setOpen(false)}>Nosotros</Link></li>
            <li><Link to="/contactanos" className={styleNavOption} onClick={() => setOpen(false)}>Contáctanos</Link></li>
            <li>
              <a
                href="tel:3135843579"
                className="bg-yellow-400 px-6 py-3 rounded-full font-bold hover:bg-amber-500 transition-colors inline-block"
                aria-label="Llamar al 313 584 3579"
              >
                ¡LLÁMANOS! <span>313 584 3579</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
