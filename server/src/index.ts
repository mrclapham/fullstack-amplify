import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config()
import { initDb } from './initDB';
initDb();
const app: Application = express();

const PORT: number = 5000;

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'Hello world!', env_name: process.env.NAME, other: 'other'});
});


app.get('/test', (req: Request, res: Response): void => {
    res.json({message: 'Hello test!', env_name: process.env.NAME, other: 'more stuff'});
});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
    console.log('ENVIRONMENT:', process.env.NAME);
});