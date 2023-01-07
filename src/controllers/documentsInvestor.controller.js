import { Document_investor } from "../models/Document_investor.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsInvestors/");
  },

  filename: function (req, file, cb) {
    req.namefile = `investorDocument-${Date.now()}.${
      file.mimetype.split("/")[1]
    }`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadDocumentInvestor = upload.single("document");

export const getDocumentsInvestors = async (req, res) => {
  try {
    const documents = await Document_investor.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDocumentInvestor = async (req, res) => {
  try {
    const { name, investor_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/documentsInvestors/${req.namefile}`;
    const document = await Document_investor.findOne({
      where: { url_document },
    });
    if (document) {
      return res.status(400).json({ message: "Document already exists" });
    }
    const newDocument = await Document_investor.create({
      name,
      url_document,
      investor_id,
    });
    res.status(201).json({
      message: "Document created successfully",
      data: newDocument,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDocumentInvestor = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_investor.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDocumentInvestor = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_investor.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await Document_investor.destroy({ where: { id } });
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDocumentInvestor = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, investor_id } = req.body;
    const document = await Document_investor.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await Document_investor.update({ name, investor_id }, { where: { id } });
    res.status(200).json({ message: "Document updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
