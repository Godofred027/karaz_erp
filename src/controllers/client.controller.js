import { Client } from "../models/Client.js";

export const getClients = async (req, res) => {
  try {
    const clients = await Client.findAll();
    res.status(200).json(clients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const { name, lastname, document, email, phone } = req.body;
    if (!name || !lastname || !document || !email || !phone)
      return res.status(404).json({ message: "All fields are required" });
    const newClient = await Client.create({
      name,
      lastname,
      document,
      email,
      phone,
    });
    res
      .status(201)
      .json({ message: "Client created successfully", data: newClient });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({ where: { id } });
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.destroy({ where: { id } });
    if (!client) return res.status(404).json({ message: "Client not found" });
    res.status(200).json({ message: "Client deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await Client.findOne({ where: { id } });
    if (!client) return res.status(404).json({ message: "Client not found" });
    client.set(req.body);
    await client.save();
    res.status(200).json(client);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
