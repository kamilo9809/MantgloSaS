import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

function FloatButton() {
  return (
    <motion.a
      href="https://wa.me/573135843579"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 bg-yellow-400 text-white rounded-full shadow-xl w-16 h-16 flex items-center justify-center hover:bg-amber-500 transition-colors"
      aria-label="Abrir chat de WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </motion.a>
  );
}

export default FloatButton;
