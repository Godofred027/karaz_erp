import { State_project } from "../models/State_project.js";

export const getStatesProjects = async (req, res) => {
  try {
    const statesProjects = await State_project.findAll();
    res.status(200).json(statesProjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createStatesProjects = async (req, res) => {
  try {
    const { name } = req.body;
    const newStatesProjects = await State_project.create({
      name,
    });
    res.status(201).json({
      message: "State Project created successfully",
      data: newStatesProjects,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneStatesProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const statesProjects = await State_project.findOne({
      where: {
        id,
      },
    });
    if (!statesProjects) {
      return res.status(404).json({ message: "State Project not found" });
    }
    res.status(200).json(statesProjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateStatesProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const statesProjects = await State_project.findOne({ where: { id } });
    if (!statesProjects) {
      return res.status(404).json({ message: "State Project not found" });
    }
    statesProjects.set(req.body);
    await statesProjects.save();
    res.status(200).json(statesProjects);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteStatesProjects = async (req, res) => {
  try {
    const { id } = req.params;
    const statesProjects = await State_project.findOne({ where: { id } });
    if (!statesProjects) {
      return res.status(404).json({ message: "State Project not found" });
    }
    await statesProjects.destroy();
    res.status(200).json({ message: "State Project deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
