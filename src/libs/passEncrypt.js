import bycrypt from "bcryptjs";

const encryptPassword = (password) => {
  const salt = bycrypt.genSaltSync(10);
  return bycrypt.hashSync(password, salt);
};

const comparePassword = (password, receivedPassword) => {
  return bycrypt.compareSync(password, receivedPassword);
};

export { encryptPassword, comparePassword };
