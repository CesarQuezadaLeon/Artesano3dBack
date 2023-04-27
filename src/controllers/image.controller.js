

export const UploadImg = async (req,res)=>{
    try{
        console.log(req.file);
    res.send("archivo subido exitosamente");}
    catch(error){
        return res.status(500).json({
          message: "Something goes whrong",
        });
    }
};

export const GetImg = async (req,res)=>{
    res.send("Todo bien funciona bien")
}