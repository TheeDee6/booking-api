import express from 'express';
import { bookingRouter } from './routes/all-routes.js';
import mongoose from 'mongoose';
import 'dotenv/config'
import cors from 'cors'

//connect to database
await mongoose.connect(process.env.MONGO_URI);

//create an express app
const app = express();

const port = 3010

app.use(cors())
app.use(express.json());
app.use(bookingRouter);

//listen for incoming requests
app.listen(port,() =>  {
    console.log(`App is listen to ${port}`)
});