import { Role } from "../models/Role.js";
import { User } from "../models/User.js";
import config from "../config.js";

export const createRoles = async () => {
  try {
    const count = await Role.count();
    if (count > 0) return;

    const values = await Promise.all([
      Role.create({ name: "user" }),
      Role.create({ name: "seller" }),
      Role.create({ name: "admin" }),
    ]);

    console.log(values);
  } catch (error) {
    console.error(error);
  }
};

export const createAdmin = async () => {
  try {
    const user = await User.findOne({ where: { email: config.APP_MAIL } });
    if (user) return;
    const newUser = await Promise.all(
      User.create({
        username: config.APP_USER,
        email: config.APP_MAIL,
        password: config.APP_PASS,
        role: 3,
      })
    );
    console.log(newUser);
  } catch (error) {
    console.error(error);
  }
};
