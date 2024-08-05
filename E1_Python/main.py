from flask import Flask, request
import os
from dotenv import load_dotenv
import json

load_dotenv()  # Carga las variables de entorno del archivo .env

app = Flask(__name__)

@app.route('/')
def hello_world():
    data = request.get_json()
    print(data)
    return 'Hello, World!'

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))  # Usa la variable de entorno o un puerto por defecto
    app.run(debug=True, port=port)