import { Document_envoice } from "../models/Document_envoice.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsEnvoices/");
  },

  filename: function (req, file, cb) {
    req.namefile = `envoiceDocument-${Date.now()}.${
      file.mimetype.split("/")[1]
    }`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadDocumentEnvoice = upload.single("document");

export const getDocumentsEnvoices = async (req, res) => {
  try {
    const documents = await Document_envoice.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDocumentEnvoice = async (req, res) => {
  try {
    const { name, bill_id } = req.body;
    console.log(req.body);
    const url_document = `https://api.aibrkaraz.com/public/documentsEnvoices/${req.namefile}`;
    console.log(req.file.filename);
    const document = await Document_envoice.findOne({
      where: { url_document },
    });
    if (document) {
      return res.status(400).json({ message: "Document already exists" });
    }
    const newDocument = await Document_envoice.create({
      name,
      url_document,
      bill_id,
    });
    res.status(201).json({
      message: "Document created successfully",
      data: newDocument,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDocumentEnvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_envoice.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDocumentEnvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_envoice.destroy({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json({ message: "Document deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDocumentEnvoice = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_envoice.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    document.set(req.body);
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};
