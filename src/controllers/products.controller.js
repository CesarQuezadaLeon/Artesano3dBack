import { pool } from "../DB.js";

export const getProducts = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Producto");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes whrong",
    });
  }
};
export const getProduct = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM Producto WHERE IdProducto=?",
      [req.param.id]
    );
    if (rows.length <= 0) {
      return res.status(404).json({
        message: "Producto no existe",
      });
    }
    res.json(rows[0]);
    console.log(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Something goes whrong",
    });
  }
};
export const crateProduct = async (req, res) => {
  try {
    const { NombreP, Dimensiones, Material, Costo, ClaveCategoria } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO Producto(NombreP,Dimensiones,Material,Costo,ClaveCategoria) VALUES(?,?,?,?,?)",
      [NombreP, Dimensiones, Material, Costo, ClaveCategoria]
    );
    res.send({
      id: rows.insertId,
      NombreP,
      Dimensiones,
      Material,
      Costo,
      ClaveCategoria,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something goes Whrong",
    });
  }
};

export const updateProduct = async (req,res)=>{
    try {
        const {id}=req.param;
        const {NombreP, Dimensiones, Material, Costo, ClaveCategoria}= req.body;
        const [resul] = await 
        pool.query("UPDATE Producto SET NombreP=IFNULL(?,NombreP), Dimensiones=IFNULL(?,Dimensiones),Material=IFNULL(?,Material),Costo=IFNULL(?,Costo),ClaveCategoria=IFNULL(?,ClaveCategoria) WHERE IdProducto=?",
        [NombreP, Dimensiones, Material, Costo, ClaveCategoria,id]);
        console.log(resul);
        if (resul.affectedRows===0) {
            return res.status(404).json({
                message:"Producto no encontrado, no es posible actualizar"
            });
        }
        const [rows] = await pool.query("SELECT * FROM Producto WHERE IdProducto=?",
        [req.param.id]);
        res.json(rows);
        console.log(rows);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something goes Whrong"
        })
    };
} 

export const deleteProducto = async(req,res)=>{
    try {
        const [resul] = await pool.query("DELETE FROM Producto WHERE IdProducto=?",
        [req-param.id]);
        if (resul.affectedRows<=0) {
            return res.status(404).json({
                message:"Producto no existe, imposible eliminar"
            });
        }else{
            return res.json({
                message:"Eliminado con exito"
            });
        }
        res.sendStatus(204);
        console.log(resul);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:"Something goes whrong"
        })
    }
}