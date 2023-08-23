import { API_URL } from "./api_url";
import { fetchJson } from "./fetch";
import { Product } from "../types";

export const getAllProducts = async () => {
    const response = await fetchJson(`${API_URL}v1/products`);
    return await response;
};

export const addProduct = async (product: Product): Promise <Product[]> => {
    // const result = await fetchJson(`api/v1/shipwrecks`);
    // console.log("result: ", result);
    // console.log("product: ", product);
    const response = await fetch(`${API_URL}v1/add_product`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    });
    return await response.json();
};