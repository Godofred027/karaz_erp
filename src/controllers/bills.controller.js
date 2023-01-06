import { Bill } from "../models/Bill.js";

export const getBills = async (req, res) => {
  try {
    const bills = await Bill.findAll();
    res.status(200).json(bills);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createBill = async (req, res) => {
  try {
    const {
      description,
      amount,
      envoice_date,
      type_envoice_id,
      user_id,
      project_id,
    } = req.body;
    const newBill = await Bill.create({
      description,
      amount,
      envoice_date,
      type_envoice_id,
      user_id,
      project_id,
    });
    res
      .status(201)
      .json({ message: "Bill created successfully", data: newBill });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findOne({ where: { id } });
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json(bill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.destroy({ where: { id } });
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    res.status(200).json({ message: "Bill deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateBill = async (req, res) => {
  try {
    const { id } = req.params;
    const bill = await Bill.findOne({ where: { id } });
    if (!bill) return res.status(404).json({ message: "Bill not found" });
    bill.set(req.body);
    await bill.save();
    res.status(200).json(bill);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
