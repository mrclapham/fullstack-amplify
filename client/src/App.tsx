import './App.css';
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Product } from "./types";
import { getAllProducts, addProduct } from "./services/product.service";
import { Demo } from "./components/Demo/Demo";

function App() {    
  
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {

    getAllProducts().then(res => {
      setProducts(res);
    })
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>

        <button className={'adder'} 
        onClick={async ()=> {
          addProduct({name: 'test', price: 123}).then(res => {
            console.log(res);
          });
          // getAllProducts().then(res => {
          //   setProducts(res);
          // })
        } }>Add Product</button>




        {products.map(({name, price, id}) => {
          return (
            <div key={id}>
              <ul>
                <li>{name}: {price}</li> 
              </ul>
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
