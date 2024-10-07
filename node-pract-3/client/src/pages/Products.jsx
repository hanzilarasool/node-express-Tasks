import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./styles/Products.css";

let url = "http://localhost:3000";
const axiosInstance = axios.create({
  baseURL: url,
});

function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [isEdit, setisEdit] = useState(false);
  const [id, setId] = useState("");
//   const navigate=useNavigate();

  // Fetch products once when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.log("Error in fetching products", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  // Handle form submission and add new product
  const handleSubmit = useCallback( async (e) => {
    e.preventDefault();
  
    // Validate input fields


    try {



        if(isEdit){
            // const product=products.findIndex(product=>product.id===id);
            await axiosInstance.put(`/api/products/${id}`,{name, price});
            setProducts((prevProducts)=>prevProducts.map((prod)=>prod.id===id?{...prod, name,price}:{name , price , id:crypto.randomUUID()}))
        }
      else{
        const response = await axiosInstance.post("/api/products/post", {
            name: name,
            price: parseFloat(price), // Convert price to a number
            id: crypto.randomUUID(),
          });
    
          setProducts((prevProducts) => [...prevProducts, response.data]);
    
          // Clear the input fields after submission
          setName("");
          setPrice("");
    
      }      window.location.reload();
    } catch (error) {
      console.log("Error in adding product", error);
    }
  },[isEdit,id, name , price])
  const handleEdit=(id)=>{
   
    const product=products.findIndex(product=> product.id===id);
    if(product!==-1){
        setName(products[product].name);
        setPrice(products[product].price);
        setId(id);
        setisEdit(true);
    }
  }

  const handleDelete = useCallback(async (id) => {
    try {
       await axiosInstance.delete(`/api/products/${id}`);
    //   let data = response.data;
  
      // Filter out the deleted product locally without reloading the page
      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.log("Error deleting product", error);
    }
  }, [setProducts]);
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            placeholder="Product name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="number"
            placeholder="Price ...$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="table-container">
        {products.length > 0 ? (
          <table style={{ borderCollapse: "collapse", border: "1px inset grey" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>ID</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price ? `${product.price}$` : "N/A"}</td>
                  <td>{product.id?.substring(0, 5)}...</td>
                  <td> 

                    <button onClick={()=>{
                        handleEdit(product.id) 
                    }}>
                        Edit</button>
                        <button onClick={()=>{
                            handleDelete(product.id)
                        }}>
                            delete
                        </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
}

export default Products;
