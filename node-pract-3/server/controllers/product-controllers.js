let products = [];
let product = {};
const getAllProducts = (req, res) => {
  // console.log("req here", products)

  res.status(200).json(products);
};

const addProduct = async (req, res) => {
  const { name, price, id } = await req.body;
    let index=products.findIndex((product)=>product.id===id);
    if(index!==-1){
        products[index]={...products[index],name, price};
        res.status(200).json(products[index]);
    }
 else{
    let newProduct=products.push({ name, price, id });
    res.status(200).json({name,price,id});
 }
  console.log(products, "is the array after adding a product");
//   res.status(200).json({name,price,id});
};

const deleteProduct = async (req, res) => {
    const { id } = req.params; // No need to use 'await' with req.params
    console.log("Deleting product with ID:", id);
  
    // Make sure products is an array you are filtering from
    const filteredProducts = products.filter(product => product.id !== id);
    
    if (filteredProducts.length === products.length) {
      return res.status(404).json({ message: "Product not found" });
    }
  
    // Replace original products array (this assumes you're using an in-memory array)
    // You should persist the updated array in the actual data store
    products = filteredProducts;
  
    res.status(200).json(filteredProducts); // Send back the filtered array after deletion
  };

const updateProduct = async (req, res) => {
  const { id } = await req.params;
  console.log(id, "is the id");
  const { name, price } = await req.body;
  // const productIndex=products.findIndex((product)=>product.id===id);
  let updatedArray = await products.map((product, index) =>
    id === product.id ? { ...product, name, price } : { product }
  );
  products=updatedArray;

  console.log(updatedArray, "is the updated array after product update");
  res.status(200).json(updatedArray);
};

module.exports = { getAllProducts, addProduct, deleteProduct, updateProduct };
