export function validateId(id, res) {
    if (isNaN(id)) {
        res.status(400).json({
            message: 'El ID debe ser un número válido',
            status: 400
        });
        return false;
    }
    return true;
}

export function marcaExists(marca, res) {
    if (!marca) {
        res.status(404).json({
            message: "Marca no encontrada",
            status: 404
        });
        return false;
    }
    return true;
}