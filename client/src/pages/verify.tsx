import { useEffect } from "react";
import { useRoute } from "wouter";

export default function VerifyPageRedirect() {
  const [, params] = useRoute("/verify/:token");

  useEffect(() => {
    const token = (params as any)?.token;
    if (token) {
      // Redirect to server-side verify route which serves the new AI-created UI
      window.location.href = `/verify/${token}`;
    } else {
      // If no token, go to root
      window.location.href = "/";
    }
  }, [params]);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p>Redirigiendo a la verificación...</p>
    </div>
  );
}
