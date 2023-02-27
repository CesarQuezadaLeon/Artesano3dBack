import express from 'express';
import ProductRoutes from './routes/products.routes.js'
import CategoryRoutes from './routes/category.routes.js'
import imageRoute from './routes/image.routes.js'

const app = express();

app.use(express.json());
app.use('/api/',ProductRoutes); //app.use('/api',rutadecontrolador)
app.use('/api/',CategoryRoutes)
app.use('/api/',imageRoute)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"end point not found"
    })
})
export default app;