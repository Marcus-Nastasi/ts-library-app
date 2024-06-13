require('dotenv').config();
import express from 'express';
import path from 'path';
import { router } from './routes/router';

const app = express();

app.use(express.json());

app.use(router);

app.listen(3030, () => console.log('http://localhost:3030/'));


