import express from "express";
import "dotenv/config";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";

import {connectDB} from "./lib/db.js";


const app=express();

const PORT= process.env.PORT || 5000;

//middleware to parse the data
app.use(express.json());
app.use(cors());

//creating route
app.use("/api/auth",authRoutes)
app.use("/api/books", bookRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});

