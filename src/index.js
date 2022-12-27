import app from "./app.js";
import { sequelize } from "./database/database.js";
//import models
import "./models/Index.js";

app.listen(app.get("port"), async () => {
  try {
    await sequelize.sync({ force: false });
    console.log("Database connected");
    console.log("Runing server on port", app.get("port"));
    console.log(
      `Connect to server on http://${app.get("host")}:${app.get("port")}`
    );
  } catch (error) {
    console.log("Error connecting to database", error);
  }
});
