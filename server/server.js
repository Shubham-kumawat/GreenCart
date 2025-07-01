import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/db.js';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

await connectDB()

const allowedOrigins = ['http://localhost:5173'];

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin : allowedOrigins, credentials: true}));


app.get('/', (req, res) => 
  res.send("APi is working!"));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)});

