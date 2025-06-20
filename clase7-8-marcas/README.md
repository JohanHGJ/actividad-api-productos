
# API de Marcas (Nike, Adidas, etc.)

Este proyecto es una API sencilla para gestionar marcas famosas. Puedes **crear**, **leer**, **actualizar** y **eliminar** marcas como Nike, Adidas, etc.

## Cómo funciona

- Esta API usa `Express.js`.
- Todo se guarda en memoria (no usa base de datos por ahora).
- Puedes probarla con herramientas como **Insomnia**

## Que hacen las funciones? 

Las funciones principales permiten:

- **Crear marcas:** Agrega una nueva marca con nombre, país de origen y año de fundación.
- **Listar marcas:** Muestra todas las marcas guardadas en memoria.
- **Buscar por ID:** Permite encontrar una marca específica usando su identificador.
- **Actualizar marcas:** Modifica los datos de una marca existente.
- **Eliminar marcas:** Quita una marca de la lista usando su ID.

## Estructura del Proyecto

```bash
marcas-project/
├── node_modules/             # Herramientas internas de Node.js
├── src/
│   ├── marca/                # Todo sobre las marcas
│   │   ├── validation/       # Validaciones simples
│   │   │   └── validation.js
│   │   ├── model.js          # Lista en memoria de marcas
│   │   ├── service.js        # Funciones que hacen el trabajo
│   │   └── controller.js     # Rutas de la API
│   └── server.js             # Punto de entrada del servidor
├── package.json              # Configuración del proyecto
└── package-lock.json         # Detalles técnicos de dependencias
```


## ¿Qué hace cada archivo?

### `model.js`
Guarda las marcas en una lista como esta:

```json
[
  {
    "id": 1,
    "nombre": "Nike",
    "paisOrigen": "Estados Unidos",
    "fundacion": 1964
  },
  {
    "id": 2,
    "nombre": "Adidas",
    "paisOrigen": "Alemania",
    "fundacion": 1949
  }
]
```



### `validation.js`
Tiene dos funciones simples para revisar:
- Que el ID sea un número.
- Que la marca exista antes de hacer algo con ella.


### `service.js`
Aquí están las funciones que hacen:

- `createMarca(data, res)` → Crea una nueva marca.
- `getAllMarcas(res)` → Devuelve todas las marcas.
- `getMarcaById(id, res)` → Busca una marca por su ID.
- `updateMarca(id, data, res)` → Cambia los datos de una marca.
- `deleteMarca(id, res)` → Borra una marca.

---

### `controller.js`
Conecta las rutas web con las funciones del servicio:

| Método | Ruta             | Acción                     |
|--------|------------------|----------------------------|
| GET    | `/marcas`        | Ver todas las marcas       |
| GET    | `/marcas/:id`    | Ver una marca por ID       |
| POST   | `/marcas`        | Crear una nueva marca      |
| PUT    | `/marcas/:id`    | Actualizar una marca       |
| DELETE | `/marcas/:id`    | Eliminar una marca         |

### `server.js`
- Arranca el servidor.
- Usa JSON.
- Escucha en el puerto `3000`.
- Conecta todo con la ruta `/marcas`.


