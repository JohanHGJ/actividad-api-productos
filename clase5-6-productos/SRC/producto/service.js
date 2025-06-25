import { validateId, foundId } from './validation/validation.js';
import prisma from '../prisma.js';

async function createNewProducto(data, res) {
    try {
        const { nombre, precio, marcaId, categoriaIds } = data;

        // Validaciones básicas
        if (!nombre || !precio || !marcaId || !Array.isArray(categoriaIds)) {
            return res.status(400).json({
                error: "Faltan campos obligatorios o el formato es incorrecto",
                requiredFields: {
                    nombre: "string",
                    precio: "number",
                    marcaId: "number",
                    categoriaIds: "array<number>"
                }
            });
        }

        const newProduct = await prisma.producto.create({
            data: {
                nombre,
                precio: parseFloat(precio),
                marca: { connect: { id: parseInt(marcaId) } },
                categorias: {
                    connect: categoriaIds.map(id => ({ id: parseInt(id) }))
                }
            }
        });

        res.json({
            message: "Producto creado con éxito",
            status: 200,
            product: newProduct
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            error: "Error al crear producto",
            details: error.message
        });
    }
}

async function allProducts(res) {
    try {
        const productos = await prisma.producto.findMany({
            include: {
                marca: true,
                categorias: true
            }
        });
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
}

async function productById(id, res) {
    const isInt = +id;
    if (!validateId(isInt, res)) return;

    try {
        const product = await prisma.producto.findUnique({
            where: { id: isInt },
            include: {
                marca: true,
                categorias: true
            }
        });

        if (!foundId(product, res)) return;

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener producto" });
    }
}

async function updateProductById(id, body, res) {
    const isInt = +id;
    if (!validateId(isInt, res)) return;

    try {
        const updatedProduct = await prisma.producto.update({
            where: { id: isInt },
            data: body,
            include: {
                marca: true,
                categorias: true
            }
        });

        res.json({
            message: "Producto actualizado",
            status: 200,
            product: updatedProduct
        });
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar producto" });
    }
}

async function deleteProductById(id, res) {
    const isInt = +id;
    if (!validateId(isInt, res)) return;

    try {
        await prisma.producto.delete({
            where: { id: isInt }
        });

        res.json({
            message: "Producto eliminado exitosamente",
            status: 200
        });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar producto" });
    }
}

export default {
    createNewProducto,
    allProducts,
    productById,
    updateProductById,
    deleteProductById
};
