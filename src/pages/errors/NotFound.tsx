import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-300 text-gray-800 p-6 overflow-x-hidden">
      {/* Texto 404 */}
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="text-9xl font-extrabold text-yellow-500 drop-shadow-lg "
      >
        404
      </motion.h1>

      {/* Texto descriptivo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-4 text-xl md:text-2xl font-medium text-gray-700 text-center"
      >
        ¡Ups! Parece que esta página se fue a dar un paseo 🚜
      </motion.p>

      {/* Tractor animado */}
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: "-100vw" }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="mt-12 text-6xl overflow-y-hidden oveflow-x-hidden"
      >
        🚜
      </motion.div>

      {/* Botón volver */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10 oveflow-x-hidden"
      >
        <Link
          to="/"
          className="bg-yellow-500 text-white px-6 py-3 rounded-full font-bold hover:bg-yellow-600 transition-colors shadow-md oveflow-x-hidden"
        >
          Volver al inicio
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFound;
