Café El Mejor – Plataforma Web

Este proyecto consiste en una aplicación simple orientada a la venta de café, con una estructura que separa el backend (servidor) del frontend (interfaz del usuario).  
El servidor está desarrollado con Node.js y provee una API REST, mientras que la interfaz utiliza HTML, CSS y JavaScript.

-----------------------------------------------------
Tecnologías empleadas:

- Node.js y Express para el desarrollo del servidor.
- SQLite3 como sistema de base de datos local.
- Interfaz desarrollada con HTML5, CSS3 y JavaScript.
- Facturas en formato PDF generadas mediante un script propio (sin bibliotecas externas).
- Soporte para CORS, permitiendo el acceso desde el cliente web.

-----------------------------------------------------
Organización del repositorio:

backend/   -> Lógica del servidor y conexión a la base de datos
frontend/  -> Archivos visibles en el navegador (HTML, CSS, JS)

Contenido del directorio backend:

- server.js: lanza el servidor, sirve el contenido estático y define las rutas de la API.
- models/db.js: configuración de la base de datos y creación de las tablas.
- routes/: contiene las rutas REST para autenticación, productos, carrito, compras, administrador y cobranzas.
- package.json: contiene las dependencias necesarias (express, sqlite3, cors) y comandos de ejecución.
- tests/: carpeta prevista para pruebas (aún vacía).

Contenido del directorio frontend:

- landing.html / landing.js: página de inicio accesible al público.
- login.html y registro.html: formularios para iniciar sesión o registrarse.
- index.html y app.js: muestra los productos, carrito y proceso de compra.
- pago.html: selección del método de pago.
- admin/: sección administrativa (dashboard y admin.js).
- styles.css: hoja de estilo compartida para todo el sitio.

Las imágenes que suben los administradores se almacenan en frontend/uploads/

-----------------------------------------------------
Cómo ejecutar el proyecto:

1. Abre una terminal dentro de la carpeta backend.
2. Ejecuta los siguientes comandos:

   npm install
   PORT=3000 DB_PATH=./db.sqlite node server.js

3. Abre http://localhost:3000/ en tu navegador.
4. Regístrate o inicia sesión para comenzar a usar la tienda.

-----------------------------------------------------
Funcionamiento general:

- Los usuarios pueden crear una cuenta, iniciar sesión, ver productos y realizar pedidos.
- El sistema guarda el carrito en la base de datos y comprueba el stock antes de procesar la compra.
- Al confirmar un pedido, se registra en la tabla cobranzas y se genera una factura. Esta puede descargarse desde: 
  /api/invoice/:orderId

-----------------------------------------------------
Acceso de administrador:

1. Registra un usuario común y luego ejecútale el siguiente comando para convertirlo en administrador:

   sqlite3 backend/db.sqlite "UPDATE clientes SET isAdmin=1 WHERE correo='tu@correo.com';"

2. Accede al panel en http://localhost:3000/admin/login
3. Desde allí podrás gestionar productos, usuarios, cobranzas, facturas, proveedores y órdenes de compra.

-----------------------------------------------------
Configuración mediante variables de entorno:

- PORT: define el puerto en el que se ejecuta el servidor (por defecto: 3000)
- DB_PATH: ruta del archivo de base de datos SQLite (por defecto: ./db.sqlite)

-----------------------------------------------------
Pruebas:

Existe un archivo para pruebas en backend/tests/run-tests.js, aunque actualmente no contiene test implementados.  
El comando disponible es:

   npm test

-----------------------------------------------------
Este proyecto sirve como ejemplo de cómo desarrollar una aplicación web funcional utilizando únicamente Node.js y tecnologías básicas del lado del cliente.