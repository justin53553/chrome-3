import { motion } from "framer-motion";

interface SymbolProps {
  delay: number;
  duration: number;
  x: string;
  y: string;
  size: string;
}

const FloatingSymbol = ({ delay, duration, x, y, size }: SymbolProps) => {
  return (
    <motion.div
      className="absolute text-white/10 font-bold pointer-events-none select-none"
      style={{
        fontSize: size,
        left: x,
        top: y,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.3, 0.3, 0],
        scale: [0, 1, 1, 0],
        x: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
        y: [0, Math.random() * 100 - 50, Math.random() * 80 - 40, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ♱
    </motion.div>
  );
};

export default function FloatingSymbols() {
  const symbols = [
    { delay: 0, duration: 8, x: "10%", y: "15%", size: "3rem" },
    { delay: 1, duration: 10, x: "85%", y: "20%", size: "2.5rem" },
    { delay: 2, duration: 9, x: "15%", y: "70%", size: "2rem" },
    { delay: 1.5, duration: 11, x: "90%", y: "65%", size: "3.5rem" },
    { delay: 0.5, duration: 9.5, x: "5%", y: "40%", size: "2.8rem" },
    { delay: 2.5, duration: 10.5, x: "92%", y: "45%", size: "2.2rem" },
    { delay: 3, duration: 8.5, x: "8%", y: "85%", size: "3rem" },
    { delay: 1.8, duration: 9.8, x: "88%", y: "88%", size: "2.6rem" },
    { delay: 0.8, duration: 10.2, x: "50%", y: "8%", size: "2.4rem" },
    { delay: 2.2, duration: 9.2, x: "50%", y: "92%", size: "3.2rem" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, index) => (
        <FloatingSymbol key={index} {...symbol} />
      ))}
    </div>
  );
}
