import { Response } from 'express';
import { Product } from "../Models/Product.model";

export const getAllProducts = async (res: Response) => {
    try {
      const results = await Product.find({});
      res.send(results);
    } catch (error) {
      console.log(error);
    }
  };