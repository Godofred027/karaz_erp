import { Type_sale } from "../models/Type_sale.js";

export const getTypesSales = async (req, res) => {
  try {
    const typesSales = await Type_sale.findAll();
    res.status(200).json(typesSales);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTypesSales = async (req, res) => {
  try {
    const { name } = req.body;
    const newTypesSales = await Type_sale.create({
      name,
    });
    res.status(201).json({
      message: "Type Sale created successfully",
      data: newTypesSales,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTypesSales = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSales = await Type_sale.findOne({
      where: {
        id,
      },
    });
    if (!typesSales) {
      return res.status(404).json({ message: "Type Sale not found" });
    }
    res.status(200).json(typesSales);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTypesSales = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSales = await Type_sale.findOne({ where: { id } });
    if (!typesSales) {
      return res.status(404).json({ message: "Type Sale not found" });
    }
    typesSales.set(req.body);
    await typesSales.save();
    res.status(200).json(typesSales);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTypesSales = async (req, res) => {
  try {
    const { id } = req.params;
    const typesSales = await Type_sale.findOne({ where: { id } });
    if (!typesSales) {
      return res.status(404).json({ message: "Type Sale not found" });
    }
    await typesSales.destroy();
    res.status(200).json({ message: "Type Sale deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
