# API REST con Node.js, Express y Prisma

Este proyecto implementa una API REST para gestionar productos, marcas y categorías usando **Node.js**, **Express** y **Prisma ORM** con una base de datos **SQLite**.

---

## 📦 Instalación

```bash
npm install
```

---

## ⚙️ Inicialización del proyecto

### 1. Generar cliente Prisma
```bash
npx prisma generate
```

### 2. Crear base de datos y migraciones
```bash
npx prisma migrate dev --name init
```

### 3. Insertar datos de prueba (opcional)
```bash
npx prisma db seed
```

### 4. Levantar servidor Node
```bash
npm run start:dev
```

### 5. Abrir Prisma Studio (opcional)
```bash
npx prisma studio
```

---

## 🔌 Endpoints principales

### 📥 Crear producto
```http
POST /productos
```
**Body JSON:**
```json
{
  "nombre": "iPhone 15",
  "precio": 6000,
  "marcaId": 1,
  "categoriaIds": [1, 2]
}
```

### 📄 Obtener todos los productos
```http
GET /productos
```

---

## 📂 Estructura del proyecto

```
/src
  ├── server.js
  ├── prisma.js
  ├── service.js
/prisma
  ├── schema.prisma
  ├── dev.db (ignorado en Git)
  ├── seed.js
  └── migrations/
/.gitignore
/package.json
```

---

## 🧑 Autor

**Johan Hernández**

---

## ✅ Notas

- La base de datos local (`dev.db`) está ignorada en Git.
- Las migraciones y el esquema Prisma sí están incluidos para que se pueda reproducir el proyecto fácilmente.