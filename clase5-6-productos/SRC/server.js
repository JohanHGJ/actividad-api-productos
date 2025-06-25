import express from "express"
import productos from "./producto/controller.js"
import prisma from "./prisma.js"

const app = express()
const PORT = 3000

// Middleware para parsear JSON
app.use(express.json())

// Conexión a la base de datos
async function connectDB() {
    try {
    await prisma.$connect()
    console.log(" Conectado a la base de datos")
    } catch (error) {
    console.error(" Error de conexión:", error.message)
    process.exit(1) // Termina el proceso si no puede conectar
    }
}

// Rutas
app.use('/productos', productos)

// Iniciar servidor
app.listen(PORT, async () => {
    await connectDB()
    console.log(`Servidor en http://localhost:${PORT}`)
})

// Manejo de cierre
process.on('SIGINT', async () => {
    await prisma.$disconnect()
    process.exit()
})