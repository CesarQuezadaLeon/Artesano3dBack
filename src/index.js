import express from 'express';
import {pool} from './DB.js';
import ProductRoutes from './routes/products.routes.js'
import CategoryRoutes from './routes/category.routes.js'

const app = express();

app.listen(3000);
app.use(express.json());
app.use('/api/',ProductRoutes); //app.use('/api',rutadecontrolador)
app.use('/api/',CategoryRoutes)


console.log('server is running in port 3000')