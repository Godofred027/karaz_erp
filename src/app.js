import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
import cookieParser from "cookie-parser";
//routes
import indexRouter from "./routes/index.routes.js";

const app = express();

//settings
app.set("port", config.APP_PORT);
app.set("host", config.APP_HOST);

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", indexRouter);

//export
export default app;
