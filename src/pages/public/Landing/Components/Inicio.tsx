import { useEffect, useState } from "react";
import {
  Wrench,
  Building2,
  Globe,
  Users,
  PhoneCall,
  Zap,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import { images, icons } from "../../../../utils/index.img";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Inicio() {
  const useCounter = (end: number, duration = 2000, step = 5) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration / (end / step)));
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(timer);
        }
        setCount(start);
      }, stepTime);
      return () => clearInterval(timer);
    }, [end, duration, step]);
    return count;
  };

  const servicios = useCounter(1250, 2500, 10);
  const experiencia = useCounter(20, 2000, 1);
  const empresas = useCounter(85, 2500, 1);
  const cobertura = useCounter(15, 2500, 1);

  return (
    <div className="bg-[#f5f5f5] text-[#212121] font-sans">
      <h1 className="sr-only">
        Servicios de Mecánica Diesel en Colombia – Mantenimiento y Reparación
        Industrial
      </h1>
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative h-[85vh] sm:h-[70vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${images.image3})` }}
      >
        <div className="absolute inset-0 bg-[#0D1B2A]/80"></div>
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-0 text-center text-white px-4 sm:px-6 max-w-2xl md:max-w-3xl"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight leading-snug"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Soluciones Integrales en Mecánica Diesel
          </h2>
          <p
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Mantenimiento, reparación y soporte técnico confiable para el sector
            automotriz e industrial.
          </p>
          <a
            className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-2 text-[#FFC107] text-xl sm:text-2xl font-bold"
            style={{ fontFamily: "var(--font-title)" }}
            href="tel:313 584 3579"
          >
            <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" /> 313 584 3579
          </a>
          <Link
            to="/contactanos"
            className="mt-6 inline-block bg-[#FFC107] text-black font-semibold px-6 sm:px-8 py-3 rounded-xl shadow-lg hover:bg-yellow-500 transition text-sm sm:text-base"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Cotiza con nosotros
          </Link>
        </motion.div>
      </motion.section>

      {/* BENEFICIOS */}
      <section className="max-w-6xl mx-auto py-16 sm:py-20 px-4 sm:px-6">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-[#0D1B2A]"
          style={{ fontFamily: "var(--font-title)" }}
        >
          ¿Por qué elegirnos en una emergencia?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mt-10 sm:mt-14 text-center">
          {[
            {
              img: icons.img1,
              title: "Respuesta en minutos",
              icon: <Zap className="w-6 h-6 text-[#FFC107]" />,
              desc: "Entendemos la urgencia. Estamos listos para atenderte de inmediato y minimizar el tiempo fuera de servicio.",
            },
            {
              img: icons.img2,
              title: "Vamos donde lo necesites",
              icon: <Rocket className="w-6 h-6 text-[#FFC107]" />,
              desc: "Reparamos en tu taller, en carretera o en tu obra. Contamos con equipo móvil para asistirte donde estés.",
            },
            {
              img: icons.img3,
              title: "Trabajo garantizado",
              icon: <ShieldCheck className="w-6 h-6 text-[#FFC107]" />,
              desc: "Cada reparación incluye garantía real y comunicación transparente.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-5 sm:p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#FFC107] hover:scale-105 transition"
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-36 sm:h-44 object-contain rounded-lg mb-4"
              />
              <h2
                className="font-bold text-lg sm:text-xl text-[#0D1B2A] flex items-center justify-center gap-2"
                style={{ fontFamily: "var(--font-title)" }}
              >
                {card.icon} {card.title}
              </h2>
              <p
                style={{ fontFamily: "var(--font-body)" }}
                className="mt-2 text-gray-600 text-sm sm:text-base"
              >
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CONTADORES */}
      <section className="bg-[#0D1B2A] text-white py-16 sm:py-20 px-4">
        <h2 className="sr-only">
          Experiencia, cobertura y resultados en mecánica diesel
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 text-center">
          {[
            {
              icon: (
                <Wrench className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-[#FFC107]" />
              ),
              number: servicios,
              label: "Servicios realizados",
            },
            {
              icon: (
                <Users className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-[#FFC107]" />
              ),
              number: experiencia,
              label: "Años de experiencia",
            },
            {
              icon: (
                <Building2 className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-[#FFC107]" />
              ),
              number: empresas,
              label: "Empresas aliadas",
            },
            {
              icon: (
                <Globe className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-[#FFC107]" />
              ),
              number: cobertura,
              label: "Ciudades con cobertura",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {item.icon}
              <p
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold mt-3"
                style={{ fontFamily: "var(--font-title)" }}
              >
                {item.number}+
              </p>
              <p
                className="mt-1 text-gray-300 text-sm sm:text-base"
                style={{ fontFamily: "var(--font-title)" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALERÍA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center text-[#0D1B2A] mb-10 sm:mb-14"
          style={{ fontFamily: "var(--font-title)" }}
        >
          Nuestro taller en acción
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {[
            images.image5,
            images.image8,
            images.image9,
            images.image10,
            images.image11,
            images.image1,
            images.image2,
            images.image4,
          ].map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt={`Trabajo de mecánica diésel y mantenimiento industrial ${i + 1}`}
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg shadow-lg hover:scale-105 transition"
            />
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <motion.section
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-br from-[#0D1B2A] via-[#1B263B] to-[#0D1B2A] text-white py-16 sm:py-24 px-4 sm:px-6 overflow-hidden"
      >
        <div className="max-w-4xl sm:max-w-5xl mx-auto text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-snug sm:leading-tight"
            style={{ fontFamily: "var(--font-title)" }}
          >
            La solución que tu empresa{" "}
            <span className="text-amber-400">necesita hoy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 sm:mb-12 max-w-2xl sm:max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Más de{" "}
            <span className="font-bold text-white">
              +500 proyectos exitosos
            </span>{" "}
            y clientes satisfechos nos respaldan. Estamos listos para atenderte{" "}
            <span className="text-amber-400 font-semibold">24/7</span>.
          </motion.p>

          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-2 text-2xl sm:text-3xl font-extrabold text-amber-400 mb-6"
            style={{ fontFamily: "var(--font-title)" }}
          >
            <PhoneCall className="w-6 h-6 sm:w-8 sm:h-8" /> 313 584 3579
          </motion.p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:313 584 3579"
            className="inline-block bg-amber-500 text-black font-semibold px-8 sm:px-12 py-4 sm:py-5 rounded-xl shadow-2xl hover:bg-amber-400 transition text-base sm:text-lg"
            style={{ fontFamily: "var(--font-title)" }}
          >
            Llamar ahora
          </motion.a>
        </div>

        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${images.image3})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/40"></div>
      </motion.section>
    </div>
  );
}

export default Inicio;
