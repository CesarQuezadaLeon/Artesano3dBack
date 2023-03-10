import { Router } from "express";
import {getCategorys,getCategory,createCategory,deleteCategory,updateCategory} from '../controllers/category.controller.js';

const router = Router();
/*End points
get - Obtener
post - Insertar
put - Actualizar
delete - Eliminar
*/ 
router.get('/category',getCategorys)
router.get('/category/:id',getCategory)//consulta por id
router.post('/category',createCategory)//Insertar
router.patch('/category/:id',updateCategory)//Actualizar
router.delete('/category/:id',deleteCategory)//eliminar

export default router