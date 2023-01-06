import { Type_envoice } from "../models/Type_envoice.js";

export const getTypesEnvoices = async (req, res) => {
  try {
    const typesEnvoices = await Type_envoice.findAll();
    res.status(200).json(typesEnvoices);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createTypesEnvoices = async (req, res) => {
  try {
    const { name } = req.body;
    const newTypesEnvoices = await Type_envoice.create({
      name,
    });
    res.status(201).json({
      message: "Type Envoice created successfully",
      data: newTypesEnvoices,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneTypesEnvoices = async (req, res) => {
  try {
    const { id } = req.params;
    const typesEnvoices = await Type_envoice.findOne({
      where: {
        id,
      },
    });
    if (!typesEnvoices) {
      return res.status(404).json({ message: "Type Envoice not found" });
    }
    res.status(200).json(typesEnvoices);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateTypesEnvoices = async (req, res) => {
  try {
    const { id } = req.params;
    const typesEnvoices = await Type_envoice.findOne({ where: { id } });
    if (!typesEnvoices) {
      return res.status(404).json({ message: "Type Envoice not found" });
    }
    typesEnvoices.set(req.body);
    await typesEnvoices.save();
    res.status(200).json(typesEnvoices);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteTypesEnvoices = async (req, res) => {
  try {
    const { id } = req.params;
    const typesEnvoices = await Type_envoice.findOne({ where: { id } });
    if (!typesEnvoices) {
      return res.status(404).json({ message: "Type Envoice not found" });
    }
    await typesEnvoices.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json(error);
  }
};
