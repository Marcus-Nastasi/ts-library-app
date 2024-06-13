import dotenv from 'dotenv';
import express from 'express';
import { Server } from 'http';
import path from 'path';

dotenv.config();
const app = express();

app.listen(3030, () => console.log('http://localhost:3030/'));


