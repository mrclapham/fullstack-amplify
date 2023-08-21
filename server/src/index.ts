import express, { Application, Request, Response } from 'express';
// import dotenv from 'dotenv';
import cors from 'cors';
import { getAllShipwrecks  } from './Controllers/Shipwrecks.Controller';
import { getAllProducts } from './Controllers/Products.Controller';

// dotenv.config();

import { initDb } from './initDB';
initDb();
const app: Application = express();
app.use(cors());

const PORT: number = 5000;

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'Hello world!', env_name: process.env.NAME, other: 'other'});
});


app.get('/test', (req: Request, res: Response): void => {
    res.json({message: 'Hello test!', env_name: process.env.NAME, other: 'more stuff 123 xxx'});
})

app.get('/shipwrecks', async (req: Request, res: Response): Promise<any> => {
    const results = await getAllShipwrecks(req, res, null);
    res.send(results);
});

app.get("/products", async (req: Request, res: Response): Promise<any> => {
    const results = await getAllProducts(res);
});

app.post('/add', (req: Request, res: Response): void => {

});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
    console.log('ENVIRONMENT:', process.env.NAME);
});