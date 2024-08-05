# Ejercicio 1: Estructura de API JS

Este proyecto demuestra cómo crear una API en JavaScript usando NodeJS y Express. NodeJS permite ejecutar JavaScript en el servidor y crear un backend robusto.

### Crear un proyecto con NodeJS

Para inicializar un proyecto NodeJS, usa el siguiente comando:

```
npm init -y
```

Esto generará un archivo package.json, que es el administrador de dependencias y características del proyecto.

### Instalación de Express

Express es un framework minimalista y flexible para crear aplicaciones web y APIs con NodeJS. Instálalo con el siguiente comando:

```
npm i express
```

### Configuración para usar módulos ECMAScript 6 (ES6)

Para habilitar el uso de módulos ES6 en NodeJS, abre el archivo package.json y añade el atributo "type": "module":
```js 
"type":"module"
```

### Crear el archivo index.js

Este archivo será el punto de entrada de tu proyecto NodeJS. Por ahora, el código de este archivo será:

```js
import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
}); 
```

### Probar la API con Thunder Client
Thunder Client es una extensión de VS Code para probar APIs. Instálala y úsala para enviar solicitudes HTTP a tu API.

### Crear archivo .env para manejo de variables de entorno

Un archivo .env te permite manejar variables de entorno como puertos, claves API, entre otras. Crea un archivo .env en la raíz del proyecto y define tus variables ahí.

### Instalación de dotenv
Para usar variables de entorno en NodeJS, instala dotenv:
```js
npm i dotenv
```

### Configurar el servidor para usar .env
Al inicio de tu index.js, importa y configura dotenv:

```js
dotenv.config();
```

### Extraer las variables de entorno para usarlas en el servidor
Define las variables de entorno en tu archivo .env y extráelas en tu código:
```js
const PORT = process.env.PORT || 3000; 
```

### Instalación de Nodemon
Nodemon es una herramienta que reinicia automáticamente tu servidor cada vez que haces cambios en el código. Instálala con:

```js
npm i nodemon
```

### Configurar el proyecto para usar Nodemon

En package.json, configura los scripts para usar Nodemon:
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
```

### Iniciar el servidor

Para iniciar el servidor en modo desarrollo y usar Nodemon, ejecuta:
```bash
npm run dev
```

Esto iniciará tu servidor y lo reiniciará automáticamente cada vez que guardes cambios en tu código.

¡Y eso es todo! Ahora tienes una API básica en NodeJS usando Express, configurada para usar variables de entorno y con reinicio automático gracias a Nodemon.