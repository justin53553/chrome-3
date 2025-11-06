import { useLocation } from "wouter";
import { motion } from "framer-motion";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import FloatingSymbols from "@/components/FloatingSymbols";
import chromeBg from "@assets/chrome-hearts-bg.png";

export default function HomePage() {
  const [, setLocation] = useLocation();

  const handleVerifyDemo = () => {
    setLocation("/verify/demo-token-12345");
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${chromeBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      
      <FloatingSymbols />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-black text-center mb-12 tracking-wider"
            style={{
              background: "linear-gradient(to right, #e0e0e0, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 0 30px rgba(255,255,255,0.3)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            data-testid="text-title"
          >
            CHROME HEARTS
          </motion.h1>

          <GlassCard className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="text-3xl font-bold text-white tracking-wide">
                  Discord Verification
                </h2>
                
                <p className="text-white/70 leading-relaxed">
                  Bienvenido a nuestra comunidad
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-6 w-full"
              >
                <Button
                  onClick={handleVerifyDemo}
                  className="w-full bg-gradient-to-r from-verified-purple to-verified-pink hover-elevate active-elevate-2 border-0 text-white font-semibold text-lg h-12 rounded-xl"
                  data-testid="button-demo"
                >
                  Verificacion
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="pt-4 border-t border-white/10 w-full"
              >
                <div className="space-y-2">
                  <p className="text-xs text-white/40 uppercase tracking-wider font-semibold">
                    CREATORS
                  </p>
                  <div className="flex justify-center gap-6 text-sm text-white/70 font-medium">
                    <span>ALMIRI</span>
                    <span>cookingwithLAJA</span>
                    <span>bighomie</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
