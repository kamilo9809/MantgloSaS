import { motion } from "motion/react";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import { images } from "../../../../utils/index.img";

function Nosotros() {
        return (
            <div className="bg-[#f5f5f5] text-[#212121] font-sans">
                {/* HERO SECTION */}
                <motion.section
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url(${images.image3})` }}
                >
                    <div className="absolute inset-0 bg-[#0D1B2A]/75"></div>
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative z-10 text-center text-white px-4 max-w-2xl"
                    >
                        <h1 className="text-4xl md:text-5xl font-extrabold" style={{ fontFamily: "var(--font-title)" }}>
                            Conoce nuestra <span className="text-[#FFC107]">historia</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-200" style={{ fontFamily: "var(--font-body)" }}>
                            Más de 20 años comprometidos con la excelencia en servicios diesel
                        </p>
                    </motion.div>
                </motion.section>

                {/* QUIÉNES SOMOS */}
                <section className="py-20 px-4 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            src={images.image1}
                            alt="Nosotros"
                            className="w-full rounded-2xl shadow-xl"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-[#0D1B2A]" style={{ fontFamily: "var(--font-title)" }}>
                                ¿Quiénes <span className="text-[#FFC107]">somos?</span>
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                                Somos una empresa especializada en soluciones integrales de mecánica diesel con más de dos décadas de experiencia. Nuestro compromiso es brindar servicios de calidad, con respuesta rápida y garantía en cada trabajo realizado.
                            </p>
                            <p className="text-gray-700 text-lg leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                                Contamos con un equipo de profesionales altamente capacitados, equipamiento moderno y disponibilidad 24/7 para atender emergencias en cualquier lugar.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* MISIÓN, VISIÓN, VALORES */}
                <section className="bg-white py-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16" style={{ fontFamily: "var(--font-title)" }}>
                            Nuestra <span className="text-[#FFC107]">identidad</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <Target className="w-12 h-12 text-[#FFC107]" />,
                                    title: "Misión",
                                    desc: "Proporcionar soluciones mecánicas confiables y eficientes para mantener operativos los vehículos e industrias de nuestros clientes.",
                                },
                                {
                                    icon: <Lightbulb className="w-12 h-12 text-[#FFC107]" />,
                                    title: "Visión",
                                    desc: "Ser el referente nacional en servicios diesel, reconocidos por nuestra calidad, responsabilidad y innovación tecnológica.",
                                },
                                {
                                    icon: <Award className="w-12 h-12 text-[#FFC107]" />,
                                    title: "Valores",
                                    desc: "Excelencia, integridad, responsabilidad y compromiso con la satisfacción de nuestros clientes en cada proyecto.",
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.15 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-[#f5f5f5] to-gray-100 p-8 rounded-2xl text-center border-t-4 border-[#FFC107] shadow-lg"
                                >
                                    <div className="flex justify-center mb-4">{item.icon}</div>
                                    <h3 className="text-2xl font-bold text-[#0D1B2A] mb-4" style={{ fontFamily: "var(--font-title)" }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* POR QUÉ ELEGIRNOS */}
                <section className="py-20 px-4 max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-[#0D1B2A] mb-16" style={{ fontFamily: "var(--font-title)" }}>
                        ¿Por qué <span className="text-[#FFC107]">elegirnos?</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "20+ años de experiencia en el sector",
                            "Equipo técnico certificado y especializado",
                            "Disponibilidad 24/7 para emergencias",
                            "Garantía en todos nuestros servicios",
                            "Atención móvil en carretera y obra",
                            "Tecnología y equipamiento de punta",
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md border-l-4 border-[#FFC107]"
                            >
                                <Users className="w-8 h-8 text-[#FFC107] flex-shrink-0" />
                                <p className="text-gray-700 font-medium text-lg">{item}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
);
}

export default Nosotros;