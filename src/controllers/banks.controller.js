import { Bank } from "../models/Bank.js";

export const getBanks = async (req, res) => {
  try {
    const banks = await Bank.findAll();
    res.status(200).json(banks);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBank = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name)
      return res.status(404).json({ message: "Bank name is required" });
    const newBank = await Bank.create({ name });
    res
      .status(201)
      .json({ message: "Bank created successfully", data: newBank });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneBank = async (req, res) => {
  try {
    const { id } = req.params;
    const bank = await Bank.findOne({ where: { id } });
    if (!bank) return res.status(404).json({ message: "Bank not found" });
    res.status(200).json(bank);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBank = async (req, res) => {
  try {
    const { id } = req.params;
    const bank = await Bank.destroy({ where: { id } });
    if (!bank) return res.status(404).json({ message: "Bank not found" });
    res.status(200).json({ message: "Bank deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBank = async (req, res) => {
  try {
    const { id } = req.params;
    const bank = await Bank.findOne({ where: { id } });
    if (!bank) return res.status(404).json({ message: "Bank not found" });
    bank.set(req.body);
    await bank.save();
    res.status(200).json(bank);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
