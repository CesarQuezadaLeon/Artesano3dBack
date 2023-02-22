import { pool } from "../DB.js";

export const getProducts = async (req,res)=>{
    try {
        const [rows] = await pool.query("SELECT * FROM Producto");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message:"Something goes whrong"
        });
    }
}
export const getProduct = async(req,res)=>{
    try{
        const [rows] =await pool.query("SELECT * FROM Producto WHERE IdProducto=?",
        [req.param.id]);
        if(rows.length<=0){
            return res.status(404).json({
                message:"Producto no existe"
            });
        }
        res.json(rows[0]);
        console.log(rows);
    }catch(error){
        return res.status(500).json({
            message:"Something goes whrong"
        })
    }
}
export const crateProduct = async (req,res) =>{
    
}