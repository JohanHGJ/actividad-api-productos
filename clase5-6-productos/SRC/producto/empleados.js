import { Router } from 'express';
import validateString from './controller.js';
const router = Router();

let empleados = [];
let id = 1;

router.post('/', (req, res) => {
    const { nombre, cargo, salario } = req.body;
    if (!nombre || !cargo || typeof salario !== 'number' || salario < 1000000) {
        return res.status(400).json({ mensaje: 'Datos inválidos' });
    }

    const nuevoEmpleado = {
        id: id++,
        nombre,
        cargo,
        salario
    };
    empleados.push(nuevoEmpleado);
    res.json({ mensaje: 'Empleado creado', empleado: nuevoEmpleado });
});

router.get('/', (req, res) => {
    res.json(empleados);
});

router.get('/:id', (req, res) => {
    const paramId = +req.params.id;
    if (!validateString(paramId, res)) return;

    const empleado = empleados.find(e => e.id === paramId);
    if (!empleado) {
        return res.status(404).json({ mensaje : 'Empleado no encontrado' });
    }
    res.json(empleado);
});

router.patch('/:id', (req, res) => {
    const paramId = +req.params.id;
    const data = req.body;
    if (!validateString(paramId, res)) return;

    const index = empleados.findIndex(e => e.id === paramId);
    if (index === -1){
        return res.status(404).json({ mensaje : 'Empleado no encontrado' });
    }

    empleados[index] = {
        ...empleados[index],
        ...data
    };

    res.json({
        mensaje: 'Empleado actualizado parcialmente', 
        empleado: empleados[index],
        status: 200
    });
});

router.put('/:id', (req, res) => {
    const paramId = +req.params.id;
    const data = req.body;
    if (!validateString(paramId, res)) return;

    const index = empleados.findIndex(e => e.id === paramId);
    if (index === -1) {
        return res.status(404).json({ mensaje: 'Empleado no encontrado' });
    }

    empleados[index] = {
        id: paramId,
        ...data
    };

    res.json({
        mensaje: 'Empleado actualizado completamente',
        empleado: empleados[index],
        status: 200
    });
});

export default router;
