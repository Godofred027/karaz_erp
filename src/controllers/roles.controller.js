import { Role } from "../models/Role.js";

export const getRoles = async (req, res) => {
  try {
    const roles = await Role.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createRole = async (req, res) => {
  try {
    const { name } = req.body;
    const newRole = await Role.create({ name });
    res
      .status(201)
      .json({ message: "User created successfully", data: newRole });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({ where: { id } });
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.destroy({ where: { id } });
    if (!role) return res.status(404).json({ message: "Role not found" });
    res.status(200).json({ message: "Role deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateRole = async (req, res) => {
  try {
    const { id } = req.params;
    const role = await Role.findOne({ where: { id } });
    if (!role) return res.status(404).json({ message: "Role not found" });
    role.set(req.body);
    await role.save();
    res.status(200).json(role);
  } catch (error) {
    res.status(500).json(error);
  }
};
