import { User } from "../models/User.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/profilePictures/");
  },

  filename: function (req, file, cb) {
    req.namefile = `picture-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, req.namefile);
  },
});

const upload = multer({ storage });

export const uploadProfilePictures = upload.single("picture");

export const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, email, names, lastnames, date_of_birth } =
      req.body;
    const profile_picture = `https://api.aibrkaraz.com/public/profilePictures/${req.namefile}`;
    const user = await User.findOne({ where: { username } });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = await User.create({
      username,
      password,
      email,
      names,
      lastnames,
      date_of_birth,
      profile_picture,
    });
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.set(req.body);
    await user.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.destroy({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
