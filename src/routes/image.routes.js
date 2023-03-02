import { Router } from "express";


const router = Router();

router.get('/images',mantenimiento)
router.get('/images/:id',mantenimiento)//consulta por id
router.post('/images',mantenimiento)//Insertar
router.patch('/images/:id',mantenimiento)//Actualizar
router.delete('/images/:id',mantenimiento)//eliminar

const mantenimiento = async(res,req)=>{
    await send('mantenimiento');
}
export default router