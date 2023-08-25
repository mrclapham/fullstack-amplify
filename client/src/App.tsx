import './App.css';
import { useEffect, useState } from "react";
import styles from "./App.module.css";
import { Product } from "./types";
import { getAllProducts, addProduct } from "./services/product.service";
import { Demo } from "./components/Demo/Demo";

function App() {    
  
  const [products, setProducts] = useState<Product[]>([])
  const [productName, setProductName] = useState<string>('');
  const [productPrice, setProductPrice] = useState<number>(0);

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
          addProduct({name: productName, price: productPrice}).then(res => {
            console.log(res);
            getAllProducts().then(res => {
            setProducts(res);
          })
            
          });
          // getAllProducts().then(res => {
          //   setProducts(res);
          // })
        } }>Add Product: {productName}: {productPrice}</button>

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
        <input type="text" id="name" name="name" onChange={(e)=> setProductName(e.target.value)}/>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" name="price" onChange={(e)=> setProductPrice(parseFloat(e.target.value))} />
      </form>
    </div>
  )
}

export default App
