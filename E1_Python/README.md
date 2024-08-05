# Ejercicio 1: Estructura de API con Flask

Este proyecto demuestra cómo crear una API en Python usando Flask. Flask es un microframework para Python que permite desarrollar aplicaciones web de manera rápida y sencilla.

### Instalación de dependencias

Instala Flask y python-dotenv para manejar variables de entorno:

```bash
pip install Flask python-dotenv
```

### Crear archivo .env para manejo de variables de entorno

Un archivo .env te permite manejar variables como puertos, claves API, entre otras. Crea un archivo .env en la raíz del proyecto y define tus variables ahí. Por ejemplo:

```bash
PORT=5000
```

### Crear el archivo main.py
Este archivo será el punto de entrada de tu proyecto Flask. El código de este archivo será:

```python
from flask import Flask
import os
from dotenv import load_dotenv
import json

load_dotenv()  # Carga las variables de entorno del archivo .env

app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    port = int(os.getenv("PORT", 5000))  # Usa la variable de entorno o un puerto por defecto
    app.run(debug=True, port=port)
```

### Probar la API
Para ejecutar tu aplicación Flask, usa el siguiente comando:
```bash
python main.py
```

Esto iniciará el servidor en el puerto definido en tu archivo .env o en el puerto 5000 por defecto.
