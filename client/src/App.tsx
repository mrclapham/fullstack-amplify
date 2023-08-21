import './App.css';
import { useEffect, useState } from "react";
import styles from "./App.module.css";

const API_URL = import.meta.env.VITE_API_URL

type Product = {
  id: string;
  name: string;
  price: number;
}

function App() {    
  
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(`${API_URL}products`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    }
    getApi().then(res => {
      console.log(res);
      setProducts(res);
    })
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>Rock, paper, scissors...</h1>
        {JSON.stringify(products)}
        {products.map((product) => {
          return (
            <div key={product.id}>
              <h2>{product.name}</h2>
              <p>{product.price}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default App
