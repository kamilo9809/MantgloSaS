import { Facebook, Instagram, Youtube, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logoMantglo.png";

function Footer() {
  return (
    <footer className="bg-[#212121] text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="flex flex-col items-start sm:items-center md:items-start text-center sm:text-left md:text-left">
          <div className="w-32 py-3 bg-[#FFC107] flex items-center justify-center rounded-lg font-bold text-black text-lg">
            <img src={logo} alt="Logo Mantglo" className="max-h-12 object-contain" loading="lazy" decoding="async" />
          </div>
          <p className="text-sm text-gray-300 mt-3 max-w-xs">
            Expertos en reparación de motores diésel y maquinaria pesada.
          </p>
        </div>

        <div className="flex flex-col items-start sm:items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#FFC107] mb-3">Enlaces</h3>
          <ul className="space-y-2 text-center sm:text-left">
            <li><Link to="/servicios" className="hover:text-[#FFC107]">Servicios</Link></li>
            <li><Link to="/nosotros" className="hover:text-[#FFC107]">Nosotros</Link></li>
            <li><Link to="/contactanos" className="hover:text-[#FFC107]">Contacto</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-start sm:items-center md:items-start">
          <h3 className="text-lg font-semibold text-[#FFC107] mb-3">Contáctanos</h3>
          <p className="text-gray-300 flex items-center gap-2 text-sm sm:text-base"><Phone size={16}/> 313 584 3579</p>
          <p className="text-gray-300 flex items-center gap-2 mt-1 text-sm sm:text-base"><MapPin size={16}/> Calle 47 # 38 - 12, Barranquilla, Colombia</p>
          <a
            href="https://wa.me/573135843579"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 bg-[#FFC107] text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 text-sm sm:text-base"
            aria-label="Abrir chat de WhatsApp"
          >
            WhatsApp Directo
          </a>

          <div className="flex gap-5 mt-5 justify-center sm:justify-start">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#FFC107]"><Facebook size={22} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#FFC107]"><Instagram size={22} /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[#FFC107]"><Youtube size={22} /></a>
            <a href="https://wa.me/573023060543" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#FFC107]"><MessageCircle size={22} /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-400 text-xs sm:text-sm mt-10 border-t border-gray-700 pt-5 space-y-1">
        <p>
          Hecho por{" "}
          <a href="https://codeync.com" target="_blank" rel="noopener noreferrer" className="text-[#FFC107] hover:underline font-semibold">Codeync</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
