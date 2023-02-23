import { Router } from "express"; //importar para generar rutas
import { getProducts,getProduct,crateProduct } from "../controllers/products.controller.js"; //importacion de controladores

 const router = Router();
/*End points
get - Obtener
post - Insertar
put - Actualizar
delete - Eliminar
*/ 
 router.get('/products',getProducts)
 router.get('/products/:id',getProduct)//consulta por id
 router.post('/products',crateProduct)//Insertar
 router.patch('/products/:id')//Actualizar
 router.delete('/products/:id')//eliminar

 export default router;