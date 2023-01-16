import { User } from "../models/User.js";
import { comparePassword } from "../libs/passEncrypt.js";
import { generateToken, generateRefreshToken } from "../utils/tokenManager.js";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    const passwordIsValid = comparePassword(password, user.password);
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }
    const { token, expiresIn } = generateToken(user.id);
    generateRefreshToken(user.id, res);
    res.status(200).send({
      accessToken: token,
      expiresIn,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getInfo = async (req, res) => {
  try {
    const user = await User.findByPk(req.userId, {
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.status(404).send({ message: "User Not found." });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { token, expiresIn } = generateToken(req.userId);
    res.status(200).json({ token, expiresIn });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("refreshToken");
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
