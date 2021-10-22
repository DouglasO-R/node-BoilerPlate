// node modules
import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";


//modules app 
import { router } from "./routes";
import log from "./log";

// variables
dotenv.config();
const app = express();
global.logger = log;
global.port = process.env.PORT;


// app config
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(helmet());

// 
app.use('/api', router);

export { app };