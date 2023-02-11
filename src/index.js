import express from 'express';
import {pool} from './DB.js';

const app = express();

app.listen(3000);
app.use(express.json());
//app.use(Ruta);
//app.use('/api',rutadecontrolador)