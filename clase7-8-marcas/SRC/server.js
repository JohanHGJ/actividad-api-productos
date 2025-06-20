import express from 'express';
import marcaRouter from './marca/controller.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/marcas', marcaRouter);

app.listen(PORT, () => {
    console.log(`Servidor de marcas en http://localhost:${PORT}/marcas`);
});