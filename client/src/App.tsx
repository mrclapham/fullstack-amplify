import './App.css';
import { useEffect } from "react";
import styles from "./App.module.css";

const API_URL = import.meta.env.VITE_API_URL


function App() {
  useEffect(() => {
    const getApi = async () => {
      const response = await fetch(`${API_URL}test`);
      const body = await response.json();
      if (response.status !== 200) throw Error(body.message);
      return body;
    }

    getApi()

  }, []);

  console.log(import.meta.env.VITE_API_URL) // 123

  return (
    <div className={styles.container}>
      <div className={styles.titleCtn}>
        <h1>Rock, paper, scissors...</h1>
        <p>a React game</p>
      </div>
    </div>
  )
}

export default App
