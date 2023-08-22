const API_URL = import.meta.env.VITE_API_URL


export const getAllProducts = async () => {
    console.log("API_URL: ", API_URL);
    const response = await fetch(`api/v1/products`);
    //const response = await fetch(`${API_URL}v1/products`);
    return await response.json();
};


