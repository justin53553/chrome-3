import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { motion } from "framer-motion";
import SuccessCheckmark from "@/components/SuccessCheckmark";
import LoadingSpinner from "@/components/LoadingSpinner";
import chromeBg from "@assets/chrome-hearts-bg.png";

type VerificationStatus = "loading" | "success" | "error";

export default function VerifyPage() {
  const [, params] = useRoute("/verify/:token");
  const [status, setStatus] = useState<VerificationStatus>("loading");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const verifyToken = async () => {
      if (!params?.token) {
        setStatus("error");
        return;
      }

      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setStatus("success");
        
        const countdownInterval = setInterval(() => {
          setCountdown(prev => {
            if (prev <= 1) {
              clearInterval(countdownInterval);
              console.log("Redirecting to Discord...");
              return 0;
            }
            return prev - 1;
          });
        }, 1000);

        return () => clearInterval(countdownInterval);
      } catch (error) {
        console.error("Verification error:", error);
        setStatus("error");
      }
    };

    verifyToken();
  }, [params?.token]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${chromeBg})` }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />

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
              filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5)) drop-shadow(0 0 40px rgba(255,255,255,0.3))",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: [0, -5, 0],
            }}
            transition={{ 
              opacity: { delay: 0.2, duration: 0.6 },
              y: { 
                delay: 0.8,
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            data-testid="text-title"
          >
            CHROME HEARTS
          </motion.h1>

          <div className="flex flex-col items-center text-center space-y-8">
            {status === "loading" && <LoadingSpinner />}
            
            {status === "success" && (
              <>
                <SuccessCheckmark />
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: [0, -3, 0]
                  }}
                  transition={{ 
                    opacity: { delay: 0.5 },
                    y: {
                      delay: 1,
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="space-y-4"
                >
                  <h2 
                    className="text-4xl font-bold text-white tracking-wide" 
                    data-testid="text-verified"
                    style={{
                      filter: "drop-shadow(0 0 15px rgba(255,255,255,0.6)) drop-shadow(0 0 30px rgba(255,255,255,0.4))",
                    }}
                  >
                    VERIFICADO
                  </h2>
                  
                  <p 
                    className="text-xl text-white/80 font-medium" 
                    data-testid="text-welcome"
                    style={{
                      filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                    }}
                  >
                    Bienvenido a Chrome Hearts
                  </p>
                  
                  <p 
                    className="text-sm text-white/50 uppercase tracking-widest font-semibold"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
                    }}
                  >
                    Discord Verified
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="pt-6 w-full max-w-md"
                >
                  <p 
                    className="text-sm text-white/60 mb-4"
                    style={{
                      filter: "drop-shadow(0 0 5px rgba(255,255,255,0.2))",
                    }}
                  >
                    Redirigiendo en {countdown}s...
                  </p>
                  
                  <div className="space-y-2">
                    <p 
                      className="text-xs text-white/40 uppercase tracking-wider font-semibold"
                      style={{
                        filter: "drop-shadow(0 0 5px rgba(255,255,255,0.15))",
                      }}
                    >
                      CREATORS
                    </p>
                    <div 
                      className="flex justify-center gap-6 text-sm text-white/70 font-medium"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(255,255,255,0.25))",
                      }}
                    >
                      <span>ALMIRI</span>
                      <span>cookingwithLAJA</span>
                      <span>bighomie</span>
                    </div>
                  </div>
                </motion.div>
              </>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="w-24 h-24 rounded-full bg-red-500/20 border-4 border-red-500 flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-red-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    data-testid="icon-error"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
                
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold text-white" data-testid="text-error">
                    Error
                  </h2>
                  <p className="text-white/70">
                    Token de verificación inválido o expirado
                  </p>
                </div>

                <button
                  onClick={() => window.location.reload()}
                  className="px-6 py-3 bg-white/10 hover-elevate active-elevate-2 border border-white/20 rounded-xl text-white font-medium transition-all"
                  data-testid="button-retry"
                >
                  Intentar de nuevo
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
