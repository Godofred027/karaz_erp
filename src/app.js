import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
import cookieParser from "cookie-parser";
//initial setup
import { createAdmin, createRoles } from "./libs/initialSetup.js";
//routes
import indexRouter from "./routes/index.routes.js";
import rolesRouter from "./routes/roles.routes.js";
import usersRouter from "./routes/users.routes.js";

const app = express();

// initial setup
createRoles();
createAdmin();

//settings
app.set("port", config.APP_PORT);
app.set("host", config.APP_HOST);

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/roles`, rolesRouter);
app.use(`/api/${config.API_VERSION}/users`, usersRouter);

//export
export default app;
