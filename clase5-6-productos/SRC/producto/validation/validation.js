export function validateId(int, res) {
    if (isNaN(int)) {
        res.status(400).json({
            message: 'El ID debe ser un número válido',
            status: 400
        });
        return false;
    }
    return true;
}

export function foundId(product, res) {
    if (!product) {
        res.status(404).json({
            message: "Product not found",
            status: 404
        });
        return false;
    }
    return true;
}