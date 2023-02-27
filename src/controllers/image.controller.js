import multer from "multer";
import { dirname, join } from 'path'
import { fileURLToPath } from "url";


const Dir_URL = dirname(fileURLToPath(import.meta.url)); 

const multerUpload = multer({
    dest: join(Dir_URL, '../src/uploads'),
    limits:{
        fieldNameSize:10000000
    }
});

export const subida =()=>{
    multerUpload.single('file'),(req,res)=>{
        console.log(req.file);
    }
}

