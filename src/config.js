import dotenv from "dotenv";

dotenv.config();

export default {
  //app config
  APP_PORT: process.env.APP_PORT || 3000,
  APP_HOST: process.env.APP_HOST || "localhost",
  //app datails
  APP_NAME: process.env.APP_NAME,
  APP_VERSION: process.env.APP_VERSION,
  APP_DESCRIPTION: process.env.APP_DESCRIPTION,
  APP_AUTHOR: process.env.APP_AUTHOR,
  APP_AUTHOR_EMAIL: process.env.APP_AUTHOR_EMAIL,
  APP_URL: process.env.APP_URL,
  //user admin
  APP_USER: process.env.APP_USER,
  APP_MAIL: process.env.APP_MAIL,
  APP_PASS: process.env.APP_PASS,
  //database settings
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_TYPE: process.env.DB_TYPE,
  //api settings
  API_URL: process.env.API_URL,
  API_PORT: process.env.API_PORT,
  API_HOST: process.env.API_HOST,
  API_VERSION: process.env.API_VERSION,
  //jwt settings
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_REFRESH: process.env.JWT_REFRESH,
  //enviroment
  IS_DEV: process.env.IS_DEV,
  //frontend urls
  FRONTEND_URL_1: process.env.FRONTEND_URL_1,
  FRONTEND_URL_2: process.env.FRONTEND_URL_2,
  FRONTEND_URL_3: process.env.FRONTEND_URL_3,
  FRONTEND_URL_4: process.env.FRONTEND_URL_4,
};
