import { Document_selles } from "../models/Document_sellers.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsSalles/");
  },
  filename: function (req, file, cb) {
    req.namefile = `salleDocument-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadDocumentSalle = upload.single("document");

export const getDocumentsSalles = async (req, res) => {
  try {
    const documents = await Document_salles.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDocumentSalle = async (req, res) => {
  try {
    const { name, seller_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/documentsSalles/${req.namefile}`;
    const document = await Document_salles.findOne({ where: { url_document } });
    if (document) {
      return res.status(400).json({ message: "Document already exists" });
    }
    const newDocument = await Document_salles.create({
      name,
      url_document,
      seller_id,
    });
    res.status(201).json({
      message: "Document created successfully",
      data: newDocument,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDocumentSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_salles.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDocumentSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_salles.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await document.destroy();
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDocumentSalle = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, seller_id } = req.body;
    const document = await Document_salles.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await document.update({ name, seller_id });
    res.status(200).json({ message: "Document updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
