import {pool} from '../DB.js';

export const getCategory = async(req,res)=>{
    try{
        //throw new error('error')
        const[rows] = await pool.query('SELECT * FROM Categoria');
        res.json(rows)
    }catch(error){
        return res.status(500).json({
            message:"Something goes whrong",
        });
    }
}; 