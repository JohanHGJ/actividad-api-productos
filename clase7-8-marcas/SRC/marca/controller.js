import { Router } from 'express';
import { 
    createMarca, 
    getAllMarcas, 
    getMarcaById, 
    updateMarca, 
    deleteMarca 
} from './service.js';

const router = Router();

router.post('/', (req, res) => {
    createMarca(req.body, res);
});

router.get('/', (req, res) => {
    getAllMarcas(res);
});

router.get('/:id', (req, res) => {
    getMarcaById(Number(req.params.id), res);
});

router.put('/:id', (req, res) => {
    updateMarca(Number(req.params.id), req.body, res);
});

router.delete('/:id', (req, res) => {
    deleteMarca(Number(req.params.id), res);
});

export default router;