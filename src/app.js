import express from "express";
import dotenv from 'dotenv';
import products from "./routes/products.js";
import bodyParser from "body-parser";
import connectDB from "./database.js";
import logger from "./middlewares/logger.js";
import auth from "./routes/auth.js"
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express();


dotenv.config(); //load variable to process.env from .env file
connectDB();
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);
app.use(cookieParser());

app.use(
    cors({
      origin: process.env.APP_URL,
    })
);


const PORT= process.env.PORT;
console.log(PORT);

app.get("/",(req,res)=>{
    // res.send("Hello World");
    res.json({
        app:"Nodejs",
        version:"1.0",
    });
});

// app.get("/about",(req,res)=>{
//     res.send("ABout PAGE");
// })

app.use("/api/products",products);
app.use("/api/auth",auth);


app.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})