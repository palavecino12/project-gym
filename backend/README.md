# Backend - Project Gym

Este es el backend de **Project Gym**, una aplicación en desarrollo para la gestión de usuarios y operaciones de un gimnasio.

## 🚧 Estado del proyecto

> **Proyecto en proceso:**  
> El backend está en desarrollo activo. Pueden existir cambios frecuentes y nuevas funcionalidades en camino.

## 📦 Tecnologías principales

- Node.js
- TypeScript
- Express
- Prisma ORM
- MySQL
- Zod (validación de datos)

## ⚙️ Instalación y uso

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/project-gym.git
   cd project-gym/backend

2. **Instala las dependencias:**
   ```bash
   npm install

3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la carpeta `backend` con el siguiente contenido (ajusta los valores según tu base de datos):

     ```
     DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_base"
     ```

4. **Ejecuta las migraciones de la base de datos:**
   ```bash
   npx prisma migrate dev --name init

5. **Inicia el servidor:**
   ```bash
   npm run dev

## 📁 Estructura principal

- `/src` — Código fuente del backend (controladores, rutas, modelos, etc).
- `/prisma` — Esquema y migraciones de la base de datos.
- `.env` — Variables de entorno (no versionado).
- `README.md` — Este archivo.

## 📝 Notas

- Este backend está pensado para trabajar junto al frontend del proyecto.
- Si tienes dudas o sugerencias, ¡no dudes en abrir un issue o un pull request!

---
**Project Gym**
