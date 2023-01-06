import { State_investor } from "../models/State_investor.js";

export const getStatesInvestors = async (req, res) => {
  try {
    const statesInvestors = await State_investor.findAll();
    res.status(200).json(statesInvestors);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createStatesInvestors = async (req, res) => {
  try {
    const { name } = req.body;
    const newStatesInvestors = await State_investor.create({
      name,
    });
    res.status(201).json({
      message: "State Investor created successfully",
      data: newStatesInvestors,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneStatesInvestors = async (req, res) => {
  try {
    const { id } = req.params;
    const statesInvestors = await State_investor.findOne({
      where: {
        id,
      },
    });
    if (!statesInvestors) {
      return res.status(404).json({ message: "State Investor not found" });
    }
    res.status(200).json(statesInvestors);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStatesInvestors = async (req, res) => {
  try {
    const { id } = req.params;
    const statesInvestors = await State_investor.findOne({ where: { id } });
    if (!statesInvestors) {
      return res.status(404).json({ message: "State Investor not found" });
    }
    statesInvestors.set(req.body);
    await statesInvestors.save();
    res.status(200).json(statesInvestors);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteStatesInvestors = async (req, res) => {
  try {
    const { id } = req.params;
    const statesInvestors = await State_investor.destroy({
      where: {
        id,
      },
    });
    if (!statesInvestors) {
      return res.status(404).json({ message: "State Investor not found" });
    }
    res.status(200).json({ message: "State Investor deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};
