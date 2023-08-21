import { Product } from "../Models/Product.model";

export const getAllProducts = async (_req: any, res: { send: (arg0: any) => void; }, next: any) => {
    try {
      const results = await Product.find({});
      // const results = await Product.find({}, { name: 1, price: 1, _id: 0 });
      // const results = await Product.find({ price: 699 }, {});
      res.send(results);
    } catch (error) {
      console.log(error);
    }
  };