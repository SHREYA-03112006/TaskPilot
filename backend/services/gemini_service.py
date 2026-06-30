import google.generativeai as genai

from config import GEMINI_API_KEY

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Load model
model = genai.GenerativeModel("gemini-1.5-flash")


def prioritize_tasks(tasks):
    """
    Takes a list of tasks and returns AI-generated recommendations.
    """

    prompt = f"""
You are an AI Productivity Assistant.

Analyze the following tasks and:

1. Prioritize them.
2. Explain why.
3. Suggest the best order.
4. Give time management tips.

Tasks:
{tasks}

Keep the response short, clear, and practical.
"""

    response = model.generate_content(prompt)

    return response.text