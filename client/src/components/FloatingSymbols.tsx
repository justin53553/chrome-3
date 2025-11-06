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
    // Esquinas y extremos
    { delay: 0, duration: 8, x: "5%", y: "10%", size: "3.5rem" },
    { delay: 1, duration: 10, x: "90%", y: "12%", size: "3rem" },
    { delay: 2, duration: 9, x: "8%", y: "85%", size: "3.5rem" },
    { delay: 1.5, duration: 11, x: "92%", y: "88%", size: "4rem" },
    { delay: 0.3, duration: 9.2, x: "3%", y: "5%", size: "3.2rem" },
    { delay: 2.8, duration: 10.3, x: "95%", y: "8%", size: "3.8rem" },
    { delay: 1.1, duration: 8.8, x: "2%", y: "92%", size: "3.6rem" },
    { delay: 3.4, duration: 9.6, x: "97%", y: "95%", size: "3.3rem" },
    
    // Lado izquierdo (muchos)
    { delay: 0.5, duration: 9.5, x: "3%", y: "18%", size: "3.3rem" },
    { delay: 2.5, duration: 10.5, x: "7%", y: "25%", size: "2.8rem" },
    { delay: 3, duration: 8.5, x: "4%", y: "32%", size: "3.5rem" },
    { delay: 1.8, duration: 9.8, x: "6%", y: "40%", size: "3.1rem" },
    { delay: 3.5, duration: 9, x: "2%", y: "48%", size: "2.9rem" },
    { delay: 2.8, duration: 10.3, x: "9%", y: "55%", size: "3.4rem" },
    { delay: 0.9, duration: 9.4, x: "5%", y: "62%", size: "3rem" },
    { delay: 3.2, duration: 10.8, x: "8%", y: "70%", size: "3.2rem" },
    { delay: 1.4, duration: 8.9, x: "3%", y: "78%", size: "3.6rem" },
    
    // Lado derecho (muchos)
    { delay: 0.8, duration: 10.2, x: "93%", y: "18%", size: "2.9rem" },
    { delay: 2.2, duration: 9.2, x: "95%", y: "25%", size: "3.7rem" },
    { delay: 1.2, duration: 8.8, x: "91%", y: "32%", size: "3.2rem" },
    { delay: 3.2, duration: 9.5, x: "94%", y: "40%", size: "3rem" },
    { delay: 0.3, duration: 10.8, x: "96%", y: "48%", size: "3.6rem" },
    { delay: 2.9, duration: 9.3, x: "89%", y: "55%", size: "2.8rem" },
    { delay: 1.6, duration: 10.1, x: "92%", y: "62%", size: "3.3rem" },
    { delay: 3.5, duration: 8.7, x: "97%", y: "70%", size: "3.5rem" },
    { delay: 0.7, duration: 9.9, x: "90%", y: "78%", size: "3.1rem" },
    
    // Arriba (muchos)
    { delay: 1.4, duration: 9.7, x: "12%", y: "5%", size: "3.1rem" },
    { delay: 3.3, duration: 8.9, x: "20%", y: "8%", size: "3.5rem" },
    { delay: 0.7, duration: 10.4, x: "28%", y: "6%", size: "3.3rem" },
    { delay: 2.6, duration: 9.6, x: "36%", y: "7%", size: "2.9rem" },
    { delay: 1.9, duration: 10.1, x: "44%", y: "5%", size: "3.8rem" },
    { delay: 3.1, duration: 9.3, x: "52%", y: "9%", size: "3.2rem" },
    { delay: 0.4, duration: 10.6, x: "60%", y: "6%", size: "3.4rem" },
    { delay: 2.7, duration: 8.8, x: "68%", y: "8%", size: "3rem" },
    { delay: 1.2, duration: 9.5, x: "76%", y: "7%", size: "3.6rem" },
    { delay: 3.6, duration: 10.2, x: "84%", y: "5%", size: "3.3rem" },
    
    // Abajo (muchos)
    { delay: 2.4, duration: 9.4, x: "12%", y: "92%", size: "3.4rem" },
    { delay: 0.9, duration: 10.6, x: "20%", y: "90%", size: "3rem" },
    { delay: 3.1, duration: 8.7, x: "28%", y: "94%", size: "3.9rem" },
    { delay: 1.6, duration: 9.9, x: "36%", y: "91%", size: "3.2rem" },
    { delay: 2.7, duration: 10.2, x: "44%", y: "93%", size: "3.5rem" },
    { delay: 0.5, duration: 9.1, x: "52%", y: "90%", size: "3.1rem" },
    { delay: 3.3, duration: 10.5, x: "60%", y: "92%", size: "3.6rem" },
    { delay: 1.8, duration: 8.9, x: "68%", y: "94%", size: "3.3rem" },
    { delay: 2.2, duration: 9.7, x: "76%", y: "91%", size: "3.7rem" },
    { delay: 0.6, duration: 10.3, x: "84%", y: "93%", size: "3.2rem" },
    
    // Centro - fila superior
    { delay: 1.1, duration: 10.5, x: "18%", y: "22%", size: "2.7rem" },
    { delay: 3.4, duration: 8.6, x: "28%", y: "25%", size: "3.1rem" },
    { delay: 0.6, duration: 9.8, x: "38%", y: "20%", size: "3.3rem" },
    { delay: 2.3, duration: 10.7, x: "48%", y: "23%", size: "2.9rem" },
    { delay: 1.7, duration: 9.1, x: "58%", y: "21%", size: "2.8rem" },
    { delay: 3.6, duration: 10.3, x: "68%", y: "24%", size: "3.4rem" },
    { delay: 0.8, duration: 9.4, x: "78%", y: "22%", size: "3.1rem" },
    
    // Centro - fila media superior
    { delay: 2.1, duration: 9.6, x: "15%", y: "35%", size: "3rem" },
    { delay: 0.4, duration: 10.9, x: "25%", y: "38%", size: "3.7rem" },
    { delay: 3.7, duration: 8.4, x: "35%", y: "33%", size: "3.2rem" },
    { delay: 1.3, duration: 10.4, x: "45%", y: "36%", size: "3.1rem" },
    { delay: 2.5, duration: 9.7, x: "55%", y: "34%", size: "3.6rem" },
    { delay: 0.2, duration: 11, x: "65%", y: "37%", size: "2.9rem" },
    { delay: 3.5, duration: 8.8, x: "75%", y: "35%", size: "3.3rem" },
    { delay: 1.9, duration: 10.1, x: "85%", y: "38%", size: "3.5rem" },
    
    // Centro - medio exacto
    { delay: 1.5, duration: 9.2, x: "20%", y: "48%", size: "3.4rem" },
    { delay: 3.8, duration: 10.7, x: "30%", y: "50%", size: "3rem" },
    { delay: 0.7, duration: 9.5, x: "40%", y: "47%", size: "3.2rem" },
    { delay: 2.9, duration: 10.4, x: "50%", y: "52%", size: "3.6rem" },
    { delay: 1.3, duration: 8.9, x: "60%", y: "49%", size: "3.1rem" },
    { delay: 3.2, duration: 9.8, x: "70%", y: "51%", size: "3.5rem" },
    { delay: 0.9, duration: 10.2, x: "80%", y: "48%", size: "3.3rem" },
    
    // Centro - fila media inferior
    { delay: 2.6, duration: 9.3, x: "15%", y: "62%", size: "3.2rem" },
    { delay: 0.5, duration: 10.8, x: "25%", y: "60%", size: "3.8rem" },
    { delay: 3.9, duration: 8.6, x: "35%", y: "65%", size: "3.1rem" },
    { delay: 1.6, duration: 10.5, x: "45%", y: "63%", size: "3.4rem" },
    { delay: 2.8, duration: 9.1, x: "55%", y: "61%", size: "3.6rem" },
    { delay: 0.3, duration: 11.2, x: "65%", y: "64%", size: "3rem" },
    { delay: 3.3, duration: 8.7, x: "75%", y: "62%", size: "3.5rem" },
    { delay: 1.2, duration: 10.3, x: "85%", y: "60%", size: "3.3rem" },
    
    // Centro - fila inferior
    { delay: 2.3, duration: 9.9, x: "18%", y: "75%", size: "3.2rem" },
    { delay: 0.8, duration: 10.1, x: "28%", y: "78%", size: "3.5rem" },
    { delay: 3.5, duration: 8.5, x: "38%", y: "73%", size: "3.1rem" },
    { delay: 1.4, duration: 10.6, x: "48%", y: "76%", size: "3.7rem" },
    { delay: 2.7, duration: 9.2, x: "58%", y: "74%", size: "3.3rem" },
    { delay: 0.6, duration: 10.9, x: "68%", y: "77%", size: "3.6rem" },
    { delay: 3.1, duration: 8.8, x: "78%", y: "75%", size: "3.4rem" },
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {symbols.map((symbol, index) => (
        <FloatingSymbol key={index} {...symbol} />
      ))}
    </div>
  );
}
