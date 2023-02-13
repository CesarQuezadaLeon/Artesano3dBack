import { Router } from "express"; //importar para generar rutas
 //importacion de controladores

 const router = Router();
/*End points
get - Obtener
post - Insertar
put - Actualizar
delete - Eliminar
*/ 
 router.get('/products')
 router.get('/products/:id')//consulta por id
 router.post('/products')//Insertar
 router.patch('/products/:id')//Actualizar
 router.delete('/products/:id')//eliminar

 export default router;