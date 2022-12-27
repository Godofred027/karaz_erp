import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
//initial setup
import { createAdmin, createRoles } from "./libs/initialSetup.js";
//routes
import indexRouter from "./routes/index.routes.js";
import rolesRouter from "./routes/roles.routes.js";
import usersRouter from "./routes/users.routes.js";
import documentsRouter from "./routes/documents.routes.js";
import { fileURLToPath } from "url";

const app = express();

// initial setup
createRoles();
createAdmin();

//settings
app.set("port", config.APP_PORT);
app.set("host", config.APP_HOST);

//current directory
const __filename = dirname(fileURLToPath(import.meta.url));

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
app.use(`/api/${config.API_VERSION}/documents`, documentsRouter);

//public files
app.use("/public", express.static(join(__filename, "/uploads")));
//export
export default app;

//test runner
