import { Router } from "express";
import service from './service.js'
const router = Router();

router.post('/', (req, res) => {
    const data = req.body 
    service.createNewProducto(data, res)
})

router.get('/', (req, res) => {
    service.allProducts(res) 
})

router.get('/:id', (req, res) => {
    let paramId = +req.params.id
    service.productById(paramId, res)
})

router.put('/:id', (req, res) => {
    const id = +req.params.id
    const body = req.body
    service.updateProductById(id, body, res)
})

router.delete('/:id', (req, res) => {
    const paramId = +req.params.id 
    service.deleteProductById(paramId, res)
})

export default router;