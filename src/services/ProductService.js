import Product  from  "../models/Product.js"

const getAllProducts = async(query)=>{
  const limit = query.limit;
  const sort = query?.sort? JSON.parse(query.sort):{};
  const filters = query?.filters? JSON.parse(query.filters):{};
  const page = query.page || 1;
  const offset = (page-1)* limit;
  return await Product.find(filters).limit(limit).sort(sort).skip(offset);
};


const getProductsById = async(id)=>{
    return await Product.findById(id);
 };

const createProduct = async(data,userId)=>{
  return  await   Product.create({...data, createdBy: userId});
   
}; 

const updateProduct = async (id,data)=>{
 return await Product.findByIdAndUpdate(id,data);
}

const deleteProduct = async (id)=>{
  return await Product.findByIdAndDelete(id);
}
const getCategories = async () => {
  return await Product.distinct("category");
};
const getTotalProducts = async () => {
  return await Product.countDocuments();
};

export default {createProduct,getAllProducts,getProductsById,updateProduct,deleteProduct,getCategories,getTotalProducts,};

