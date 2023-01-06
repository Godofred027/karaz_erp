import { State_paid_seller } from "../models/State_paid_seller.js";

export const getStatesPaidSellers = async (req, res) => {
  try {
    const statesPaidSellers = await State_paid_seller.findAll();
    res.status(200).json(statesPaidSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createStatesPaidSellers = async (req, res) => {
  try {
    const { name } = req.body;
    const newStatesPaidSellers = await State_paid_seller.create({
      name,
    });
    res.status(201).json({
      message: "State Paid Seller created successfully",
      data: newStatesPaidSellers,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneStatesPaidSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const statesPaidSellers = await State_paid_seller.findOne({
      where: {
        id,
      },
    });
    if (!statesPaidSellers) {
      return res.status(404).json({ message: "State Paid Seller not found" });
    }
    res.status(200).json(statesPaidSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStatesPaidSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const statesPaidSellers = await State_paid_seller.findOne({
      where: { id },
    });
    if (!statesPaidSellers) {
      return res.status(404).json({ message: "State Paid Seller not found" });
    }
    statesPaidSellers.set(req.body);
    await statesPaidSellers.save();
    res.status(200).json(statesPaidSellers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteStatesPaidSellers = async (req, res) => {
  try {
    const { id } = req.params;
    const statesPaidSellers = await State_paid_seller.findOne({
      where: { id },
    });
    if (!statesPaidSellers) {
      return res.status(404).json({ message: "State Paid Seller not found" });
    }
    await statesPaidSellers.destroy();
    res.status(200).json({ message: "State Paid Seller deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
