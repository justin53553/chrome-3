import importlib.util
import os
import threading
import sys

# Ruta al script original dentro del repo
SCRIPT_PATH = os.path.join(os.path.dirname(__file__), "attached_assets", "app_1762408236650.py")

if not os.path.exists(SCRIPT_PATH):
    print(f"❌ No se encontró el archivo esperado: {SCRIPT_PATH}")
    sys.exit(2)

spec = importlib.util.spec_from_file_location("botapp", SCRIPT_PATH)
botapp = importlib.util.module_from_spec(spec)
spec.loader.exec_module(botapp)

# Mostrar info similar al main original
try:
    print(f"🚀 Iniciando {getattr(botapp, '__app__', 'Bot App')} {getattr(botapp, '__version__', '')}", flush=True)
    print(f"Guild ID: {getattr(botapp, 'GUILD_ID', 'None')}", flush=True)
    print(f"Verified Role ID: {getattr(botapp, 'VERIFIED_ROLE_ID', 'None')}", flush=True)
    print(f"Log Channel ID: {getattr(botapp, 'LOG_CHANNEL_ID', 'None')}", flush=True)
except Exception:
    pass

# Validación básica de BOT_TOKEN (igual que en el original)
BOT_TOKEN = getattr(botapp, 'BOT_TOKEN', '')
if not BOT_TOKEN:
    print("❌ ERROR: BOT_TOKEN no configurado!", flush=True)
    print("Por favor, configura las variables de entorno necesarias.", flush=True)
    sys.exit(1)

# Iniciar Flask en hilo demonio
flask_thread = threading.Thread(target=botapp.run_flask, daemon=True)
flask_thread.start()

# Ejecutar el bot (bloqueante)
botapp.run_bot()
