import express from "express"
import productos from "./producto/controller.js"
// Si tienes empleados, importa también:
// import empleados from "./empleados.js"

const app = express()
const PORT = 3000;

app.use(express.json());
// Si tienes empleados, usa:
// app.use('/empleados', empleados)
app.use('/productos', productos);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})