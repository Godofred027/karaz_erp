import { Role } from "../models/Role.js";
import { User } from "../models/User.js";
import { encryptPassword } from "./passEncrypt.js";
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
    console.log(user);
    if (user) return;
    const newUser = await User.create({
      username: config.APP_USER,
      email: config.APP_MAIL,
      password: encryptPassword(config.APP_PASS),
      role_id: 3,
    });
    console.log(newUser);
  } catch (error) {
    console.error(error);
  }
};
