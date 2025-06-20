import { validateId, marcaExists } from './validation/validation.js';
import { marcas } from './model.js';

export const createMarca = (data, res) => {
    const nuevaMarca = {
        id: marcas.length + 1,
        ...data
    };
    marcas.push(nuevaMarca);
    res.json(nuevaMarca);
};

export const getAllMarcas = (res) => {
    res.json(marcas);
};

export const getMarcaById = (id, res) => {
    if (!validateId(id, res)) return;

    const marca = marcas.find(m => m.id === id);

    if (!marcaExists(marca, res)) return;
    res.json(marca);
};

export const updateMarca = (id, data, res) => {
    if (!validateId(id, res)) return;

    const index = marcas.findIndex(m => m.id === id);

    if (!marcaExists(marcas[index], res)) return;
    marcas[index] = { ...marcas[index], ...data };
    res.json(marcas[index]);
};

export const deleteMarca = (id, res) => {
    if (!validateId(id, res)) return;

    const index = marcas.findIndex(m => m.id === id);

    if (!marcaExists(marcas[index], res)) return;
    
    marcas.splice(index, 1);
    res.json({ message: "Marca eliminada" });
};