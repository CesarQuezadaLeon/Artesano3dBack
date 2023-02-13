import { Router } from "express";
import {getCategory} from '../controllers/category.controller.js';

const router = Router();
/*End points
get - Obtener
post - Insertar
put - Actualizar
delete - Eliminar
*/ 
router.get('/category',getCategory)
router.get('/category/:id')//consulta por id
router.post('/category')//Insertar
router.patch('/category/:id')//Actualizar
router.delete('/category/:id')//eliminar

export default router