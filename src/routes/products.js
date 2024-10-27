import express from 'express'; 
import {
  addProduct,
  deleteProduct,
  getAllProducts,
  getCategories,
  getProductsById,
  getTotalProducts,
  updateProduct,
} from "../contollers/productController.js";

import auth from "../middlewares/auth.js";
import roleBasedAuth from "../middlewares/roleBasedAuth.js"


// import {
//   addProduct,
//   getAllProducts,
//   getProductsById,
// } from '/Users/sujangyawali/nodejs-14days/contollers/productController.js';



const router = express.Router();
// /api/products/categories
router.get("/categories",getCategories);
router.get("/total",getTotalProducts);

/**
 * GET
 * /api/products
 * Get all products
 */

router.get("/",getAllProducts);


 router.get("/:id",getProductsById);


// * post
// * /api/products
// * Get all products
// */

 router.post("/",auth, addProduct);
//  put or update
 // * /api/products
 // * Get all products
 // */
 
 router.put("/:id",auth, updateProduct);
// * delete
// * /api/products
// * Get all products
// */

 router.delete("/:id",[auth,roleBasedAuth("ADMIN")], deleteProduct);
  



 
export default router;