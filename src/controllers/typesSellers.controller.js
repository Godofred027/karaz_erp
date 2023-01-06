import { Type_seller } from "../models/Type_seller.js";

export const getTypesSellers = async (req, res) => {
  try {
    const typesSellers = await Type_seller.findAll();
    res.status(200).json(typesSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTypesSellers = async (req, res) => {
  try {
    const { name } = req.body;
    const newTypesSellers = await Type_seller.create({
      name,
    });
    res.status(201).json({
      message: "Type Seller created successfully",
      data: newTypesSellers,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTypesSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSellers = await Type_seller.findOne({
      where: {
        id,
      },
    });
    if (!typesSellers) {
      return res.status(404).json({ message: "Type Seller not found" });
    }
    res.status(200).json(typesSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTypesSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSellers = await Type_seller.findOne({ where: { id } });
    if (!typesSellers) {
      return res.status(404).json({ message: "Type Seller not found" });
    }
    typesSellers.set(req.body);
    await typesSellers.save();
    res.status(200).json(typesSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTypesSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSellers = await Type_seller.findOne({ where: { id } });
    if (!typesSellers) {
      return res.status(404).json({ message: "Type Seller not found" });
    }
    await typesSellers.destroy();
    res.status(200).json({ message: "Type Seller deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
