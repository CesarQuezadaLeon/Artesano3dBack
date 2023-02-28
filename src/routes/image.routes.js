import { Router } from "express";


const router = Router();

router.get('/images')
router.get('/images/:id')//consulta por id
router.post('/images')//Insertar
router.patch('/images/:id')//Actualizar
router.delete('/images/:id')//eliminar

export default router