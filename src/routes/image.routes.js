import { Router } from "express";
import { subida } from "../controllers/image.controller.js";

const router = Router();

router.get('/images')
router.get('/images/:id')//consulta por id
router.post('/images',subida)//Insertar
router.patch('/images/:id')//Actualizar
router.delete('/images/:id')//eliminar

export default router