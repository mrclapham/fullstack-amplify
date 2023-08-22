import './App.css';
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Product } from "./types";
import { getAllProducts } from "./services/product.service";
import { Demo } from "./components/Demo/Demo";

function App() {    
  
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    //const getApi = async () => {
    //   const response = await fetch(`${API_URL}products`);
    //   const body = await response.json();
    //   if (response.status !== 200) throw Error(body.message);
    //   return body;
    // }
    getAllProducts().then(res => {
      setProducts(res);
    })
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>

        <button className={'adder'} 
        onClick={async ()=> {
          getAllProducts().then(res => {
            setProducts(res);
          })
        } }>Add Product</button>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          )
        })}
        <Demo />
      </div>
      <form action=''>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="price">Price</label>
      </form>
    </div>
  )
}

export default App
