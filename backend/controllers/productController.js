
 const productModel=require('../models/productModel');





//get products API-/api/v1/products

exports.getProducts=async  (req,res,next)=>{

    const query =req.query.keyword?{
        name : {
        $regex: req.query.keyword,
        $options:'i',
    },}:{};
    const products= await productModel.find(query);
    
    res.json({
        success:true,
        message:'Get products working',
        products
    });
}
//get Single product API-/api/v1/product:id 
exports.getSingleProducts=async(req,res,next)=>{
try{
    const product = await productModel.findById(req.params.id);
    res.json({
        success:true,
        product
    })
}
   
catch(error){
    res.status(404).json({
        success:false,
        message:'unable to get Product with that ID'
        
    })
}
//console.log(req.params.id, 'ID')
    //const product = await productModel.findById(req.params.id);
         /*res.json({
   success:true,
   product
    })*/
}