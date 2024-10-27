
// import url from 'url';
// import path from "path";
// import fs from 'fs';
import ProductService from '../services/ProductService.js';

// const __filename= url.fileURLToPath(import.meta.url);
// const __dirname=path.dirname(__filename);
// // const rawData = fs.readFileSync( `${__dirname}/../../data/products.json`,"utf8"); 

// const rawData = fs.readFileSync('/Users/sujangyawali/nodejs-14days/data/products.json',"utf8");


// const products = JSON.parse(rawData);

//GET
const getAllProducts= async (req,res)=>{
  try{
    
    const products = await ProductService.getAllProducts(req.query); 
    res.json(products)
  }catch(error){
    res.status(500).send(error.message);
  }
  };

 
const getProductsById= async (req,res)=>{
   
  
    // const product = products.find((item)=>item.id === id);
   try{
    console.log(req.query);
    console.log(req.params);
    const id = req.params.id;
    const product = await ProductService.getProductsById(id);
    if(!product) return res.status(404).send("Product not found");
    res.json(product);
   }catch(err){
    res.status(500).send(err.message);
   }
  }

//Create
// const addProduct=(req,res)=>{
//   console.log(req.body);
//   const newProduct = req.body;
//   products.push(newProduct);
 
//   // fs.writeFileSync(`${__dirname}/../../data/products.json`,JSON.stringify(products));
//   fs.writeFileSync("/Users/sujangyawali/nodejs-14days/data/products.json",JSON.stringify(products));

//   res.status(201).json(newProduct);
//   res.send("Add the product");
// }

const addProduct= async (req,res)=>{
  const data = req.body;
  const userId = req.user.id;
  if(!data.name)return res.status(422).send("Product name is required.");
  if(!data.price)return res.status(422).send("Product price is required.");
   try{
    const createdProduct =  await ProductService.createProduct(data,userId);
  res.status(201).json(createdProduct);
   }catch(error){
    res.status(500).send(error.message);
   }
}

const updateProduct = async (req,res)=>{
  const id= req.params.id;
  const data= req.body;
  const user= rq.user;
 try{
  const product = await ProductService.getProductsById(id);
  if(!product) return res.status(404).send("Product not found");

  if(product.createdBy!= user.id &&  !user.roles.includes("ADMIN")) {
    return res.status(404).send("Acess Denied");
 }

const updatedProduct = await ProductService.updateProduct(id,data);
  res.json(updateProduct);

 }catch(error){
 res.status(500).send(error.message);
 }
};

const deleteProduct = async(req,res)=>{
  const id = req.params.id;
  try{
    const product = await ProductService.getProductsById(id);
    if(!product) return res.status(404).send("Product not found");
    await ProductService.deleteProduct(id);
    res.send(`Product with ${id} deleted sucessfully`);
  }catch(error){
    res.status(500).send(error.message);
  }
}

const getCategories = async (req, res) => {
  try {
    const categories = await ProductService.getCategories();

    res.json(categories);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getTotalProducts = async (req, res) => {
  try {
    const total = await ProductService.getTotalProducts();

    res.json(total);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

  export {getAllProducts,getProductsById,addProduct,updateProduct,deleteProduct,getCategories,getTotalProducts};