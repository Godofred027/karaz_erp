import express from "express";
import morgan from "morgan";
import cors from "cors";
import config from "./config.js";
import cookieParser from "cookie-parser";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
//initial setup
import { createAdmin, createRoles } from "./libs/initialSetup.js";
//routes tested
import indexRouter from "./routes/index.routes.js";
import rolesRouter from "./routes/roles.routes.js";
import usersRouter from "./routes/users.routes.js";
import documentsRouter from "./routes/documents.routes.js";
import authRouter from "./routes/auth.routes.js";
import documentEnvoiceRouter from "./routes/documentsEnvoices.routes.js";
import bankRouter from "./routes/banks.routes.js";
import billsRouter from "./routes/bills.routes.js";
import clientRouter from "./routes/clients.routes.js";
import statesInvestorsRouter from "./routes/statesInvestors.routes.js";
import statesPaidSellersRouter from "./routes/statesPaidSellers.routes.js";
import statesProjectsRouter from "./routes/statesProjects.routes.js";
import typesEnvoicesRouter from "./routes/typesEnvoices.routes.js";
import typesSalesRouter from "./routes/typesSales.routes.js";
import typesSellersRouter from "./routes/typesSellers.routes.js";
//routes not tested
import documentInvestorRouter from "./routes/documentsInvestors.routes.js";
import documentProjectRouter from "./routes/documentsProjects.routes.js";
import documentSalesRouter from "./routes/documentsSales.routes.js";
import documentSellerRouter from "./routes/documentsSalles.routes.js";
import voucherSalesRouter from "./routes/vouchersSales.routes.js";
import voucherSellerRouter from "./routes/vouchersSellers.routes.js";

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
const whitelist = [
  config.FRONTEND_URL_1,
  config.FRONTEND_URL_2,
  config.FRONTEND_URL_3,
  config.FRONTEND_URL_4,
];
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(
          new Error(
            "Not allowed by CORS origin: " +
              origin +
              " No se encuentra en la lista blanca."
          )
        );
      }
    },
    credentials: true,
  })
);
app.use(cookieParser());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use("/", indexRouter);
app.use(`/api/${config.API_VERSION}/roles`, rolesRouter);
app.use(`/api/${config.API_VERSION}/users`, usersRouter);
app.use(`/api/${config.API_VERSION}/documents`, documentsRouter);
app.use(`/api/${config.API_VERSION}/auth`, authRouter);
app.use(`/api/${config.API_VERSION}/banks`, bankRouter);
app.use(`/api/${config.API_VERSION}/documentsEnvoices`, documentEnvoiceRouter);
app.use(`/api/${config.API_VERSION}/bills`, billsRouter);
app.use(`/api/${config.API_VERSION}/clients`, clientRouter);
app.use(`/api/${config.API_VERSION}/statesInvestors`, statesInvestorsRouter);
app.use(
  `/api/${config.API_VERSION}/statesPaidSellers`,
  statesPaidSellersRouter
);
app.use(`/api/${config.API_VERSION}/statesProjects`, statesProjectsRouter);
app.use(`/api/${config.API_VERSION}/typesEnvoices`, typesEnvoicesRouter);
app.use(`/api/${config.API_VERSION}/typesSales`, typesSalesRouter);
app.use(`/api/${config.API_VERSION}/typesSellers`, typesSellersRouter);
app.use(
  `/api/${config.API_VERSION}/documentsInvestors`,
  documentInvestorRouter
);
app.use(`/api/${config.API_VERSION}/documentsProjects`, documentProjectRouter);
app.use(`/api/${config.API_VERSION}/documentsSales`, documentSalesRouter);
app.use(`/api/${config.API_VERSION}/documentsSellers`, documentSellerRouter);
app.use(`/api/${config.API_VERSION}/vouchersSales`, voucherSalesRouter);
app.use(`/api/${config.API_VERSION}/vouchersSellers`, voucherSellerRouter);

//public files
app.use("/public", express.static(join(__filename, "/uploads")));
//export
export default app;

//test runner 2
