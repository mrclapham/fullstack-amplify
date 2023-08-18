import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config()
import { initDb } from './initDB';
initDb();
const app: Application = express();
app.use(cors());

const PORT: number = 5000;

const DATABASE_URL: string = process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

app.get('/', (req: Request, res: Response): void => {
    res.json({message: 'Hello world!', env_name: process.env.NAME, other: 'other'});
});


app.get('/test', (req: Request, res: Response): void => {
    res.json({message: 'Hello test!', env_name: process.env.NAME, other: 'more stuff 123 xxx'});
});

app.post('/add', (req: Request, res: Response): void => {

});

app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
    console.log('ENVIRONMENT:', process.env.NAME);
});