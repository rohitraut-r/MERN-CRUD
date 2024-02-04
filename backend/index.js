import express, { response } from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import {Book} from './models/bookModel.js'
import booksRoute from "./routes/booksRoute.js"
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//middleware for handling CORS POLICY
//Option 1: Allow All origins with default of cors(*)
app.use(cors());
// //option 2: allow custom origin
// app.use(
//     cors({
//         origin:'http://localhost:3000',
//         methods:['GET','POST','PUT','DELETE'],
//         allowedHeaders: ['Content-Type'],
//     })
// );


app.get('/',(request, response) => {
    console.log(request)
    return response.status(234).send('Welcome to My first MERN website.')
});

app.use('/books', booksRoute);

mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error)=>{
        console.log(error);
    })