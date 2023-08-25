import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { getAllShipwrecks  } from './Controllers/Shipwrecks.Controller';
import { getAllProducts, addProduct, Product } from './Controllers/Products.Controller';

const apiVersion = '/v1';

// "pagination": {
//     "total_records": 100,
//     "current_page": 1,
//     "total_pages": 10,
//     "next_page": 2,
//     "prev_page": null
//   }

import { initDb } from './initDB';
initDb();
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT: number = 5000;

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'Hello world!', env_name: process.env.NAME, other: 'other'});
});


app.get('/shipwrecks', async (req: Request, res: Response): Promise<void> => {
    const results = await getAllShipwrecks(req, res, null);
    res.send(results);
});

app.get(`${apiVersion}/products`, async (req: Request, res: Response): Promise<void> => {
    const results = await getAllProducts(res);
});

app.post(`${apiVersion}/add_product`, (req: Request, res: Response): void => {
    console.log('req.body: ', req.body);
    const newProd:Product = req.body as Product;
    addProduct(req, res, newProd);
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
    console.log('ENVIRONMENT:', process.env.NAME);
});