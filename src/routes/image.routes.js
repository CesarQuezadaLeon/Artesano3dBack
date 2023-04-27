import { Router } from "express";
import multerUpload from '../multerConfig.js';
import {UploadImg,GetImg} from '../controllers/image.controller.js';

const router = Router();

router.get('/images',GetImg)
router.get('/images/:id')//consulta por id
router.post('/images',multerUpload.single('file'),UploadImg)//Insertar
router.patch('/images/:id')//Actualizar
router.delete('/images/:id')//eliminar

const mantenimiento = async(res,req)=>{
    await send('mantenimiento');
}
export default router