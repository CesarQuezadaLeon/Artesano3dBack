import {pool} from '../DB.js';

export const getCategorys = async(req,res)=>{ //consulta de api general
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
export const getCategory = async(req,res)=>{
    try {
        const [rows] = await pool.query('SELECT * FROM Categoria WHERE IdCategoria=?',[req.params.id]);
        if(rows.length<=0){
            return res.status(404).json({
                message:"Category does not exist"
            })
        }   
        res.json(rows[0]);
        console.log(rows)
    } catch (error) {
        return res.status(500).json({
            message:"Something goes whrong",
        });
    }

}
export const createCategory = async(req,res)=>{
    try {
        const {IdCategoria,NombreC} = req.body;
        const [rows] = await pool.query("INSERT INTO Categoria(IdCategoria,NombreC) VALUES (?,?)",[IdCategoria,NombreC]);
        res.send({
            IdCategoria,
            NombreC
        });
        console.log(rows[0])
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message:"Something goes whrong",
        });
    }
} 
export const deleteCategory = async(req,res)=>{
    try {
        const [resul]=await pool.query('DELETE FROM Categoria WHERE id=?'[req.params.id]);
        if(resul.affectedRows<=0){
            return res.status(404).json({
                message:"Categoria no exixtente",
            });
        };
        res.sendStatus(204);
        console.log(resul);
    } catch (error) {
        return res.status(500).json({
            message:"Something goes whrong"
        });
    }
}
