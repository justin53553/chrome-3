import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface SuccessCheckmarkProps {
  size?: number;
}

export default function SuccessCheckmark({ size = 120 }: SuccessCheckmarkProps) {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.1,
      }}
      style={{ width: size, height: size }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-verified-purple to-verified-pink animate-pulse-glow"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute inset-1 rounded-full bg-black/40 backdrop-blur-sm"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.1, duration: 0.2 }}
      />
      
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
          delay: 0.3,
        }}
      >
        <Check className="w-16 h-16 text-white relative z-10" strokeWidth={3} data-testid="icon-check" />
      </motion.div>
    </motion.div>
  );
}
