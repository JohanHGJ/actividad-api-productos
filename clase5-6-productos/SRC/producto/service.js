import { validateId, foundId } from './validation/validation.js';

let id = 1;
const products = [];

function createNewProducto(data, res) {        
    const new_product = {
        id: id++,
        ...data
    }
    products.push(new_product)
    res.json({
        message: "new product created",
        status: 200
    })
}

function allProducts(res) {
    res.json(products)    
}

function productById(id, res) {
    const isInt = +id
    if (!validateId(isInt, res)) return;
    let product = products.find((p) => p.id === isInt);
    if (!foundId(product, res)) return;
    res.json(product)
}

function updateProductById(id, body, res) {
    const isInt = +id
    if (!validateId(isInt, res)) return;
    const productIndex = products.findIndex((p) => p.id === isInt);
    if (!foundId(products[productIndex], res)) return;
    products[productIndex] = {...products[productIndex], ...body}
    res.json({
        message: "product updated",
        status: 200 
    })
}

function deleteProductById(id, res) {
    const isInt = +id;
    if (!validateId(isInt, res)) return;
    const productIndex = products.findIndex(p => p.id === isInt);
    if (!foundId(products[productIndex], res)) return;
    products.splice(productIndex, 1);
    res.json({
        message: "Product deleted successfully",
        status: 200
    });
}

export default {
    createNewProducto,
    allProducts,
    productById,
    updateProductById,
    deleteProductById
}