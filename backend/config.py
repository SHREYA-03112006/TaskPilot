from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv()

# Gemini API Key
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")