import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { environment } from "../../../../utils/environment";


function Contactanos() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (!name) return;

    setForm((prev) => ({
      ...prev,
      ...(name ? { [name]: value } : {}),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      ...form,
      createdAt: new Date().toISOString(),
    };

    emailjs
    .send(
      environment.serviceID,
      environment.templateID,
      payload,
      environment.publicKey
    )
    .then(
      () => {
        alert("Mensaje enviado correctamente ✅");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        console.error(error);
        alert("Error al enviar el mensaje ❌");
      }
    );
    
    const reset = { name: "", email: "", message: "" };
    setForm(reset);

  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 flex justify-center">
      <div className="w-full max-w-6xl space-y-12">
        {/* Grid de dos columnas */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna izquierda */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6 text-center lg:text-left">
              <h2
                className="text-3xl sm:text-4xl font-bold text-gray-800 leading-tight"
                style={{ fontFamily: "var(--font-title)" }}
              >
                ¿Necesitas ayuda? <br /> ¡Contáctanos ahora!
              </h2>
              <p className="text-gray-600 text-lg">
                Estamos disponibles para resolver tus dudas y atender tus
                necesidades de inmediato.
              </p>

              <div className="space-y-5">
                {[
                  {
                    Icon: Phone,
                    color: "bg-yellow-100 text-yellow-600",
                    href: "tel:3135843579",
                    label: "313 584 3579",
                  },
                  {
                    Icon: MessageCircle,
                    color: "bg-green-100 text-green-600",
                    href: "https://wa.me/573135843579",
                    label: "WhatsApp directo",
                  },
                  {
                    Icon: Mail,
                    color: "bg-blue-100 text-blue-600",
                    href: "mailto:info@mantglo.com",
                    label: "info@mantglo.com",
                  },
                  {
                    Icon: MapPin,
                    color: "bg-red-100 text-red-600",
                    label: (
                      <span className="flex flex-col">
                        <span>Calle 36 # 19 - 57</span>
                        <span>Barranquilla, Colombia</span>
                      </span>
                    ),
                  },
                ].map(({ Icon, color, href, label }, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center justify-center lg:justify-start gap-4"
                  >
                    <div
                      className={`p-2 rounded-full flex items-center justify-center ${color}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-gray-700 hover:text-gray-900 transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <span className="text-lg font-medium text-gray-700">
                        {label}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Columna derecha: formulario */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-xl rounded-2xl p-8 sm:p-10 space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium">Nombre</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Tu nombre"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all hover:shadow-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Correo</label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="tu@email.com"
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all hover:shadow-md"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Mensaje</label>
              <textarea
                value={form.message}
                onChange={handleChange}
                name="message"
                placeholder="Escribe tu mensaje..."
                rows={4}
                className="w-full mt-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all hover:shadow-md"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-yellow-400 hover:bg-amber-500 transition-colors font-bold py-3 rounded-lg shadow-md"
            >
              Enviar mensaje
            </motion.button>

            <p className="text-sm text-gray-500 text-center">
              Respondemos en menos de <span className="font-semibold">24h</span>
              .
            </p>
          </motion.form>
        </div>

        {/* Mapa (abajo, ancho completo) */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full shadow-lg rounded-2xl overflow-hidden"
        >
          <iframe
            title="Ubicación Mantglo"
            src="https://www.google.com/maps?q=Calle+36+%23+19-57,+Barranquilla,+Colombia&output=embed"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default Contactanos;
