import { Document_sale } from "../models/Document_sale.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsSales/");
  },
  filename: function (req, file, cb) {
    req.namefile = `saleDocument-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, req.namefile);
  },
});

const upload = multer({ storage });
export const uploadDocumentSale = upload.single("document");

export const getDocumentsSales = async (req, res) => {
  try {
    const documents = await Document_sale.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDocumentSale = async (req, res) => {
  try {
    const { name, sale_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/documentsSales/${req.namefile}`;
    const document = await Document_sale.findOne({ where: { url_document } });
    if (document) {
      return res.status(400).json({ message: "Document already exists" });
    }
    const newDocument = await Document_sale.create({
      name,
      url_document,
      sale_id,
    });
    res
      .status(201)
      .json({ message: "Document created successfully", data: newDocument });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDocumentSale = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_sale.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDocumentSale = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_sale.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await document.destroy();
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDocumentSale = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_sale.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    document.set(req.body);
    await document.save();
    res
      .status(200)
      .json({ message: "Document updated successfully", data: document });
  } catch (error) {
    res.status(500).json(error);
  }
};
