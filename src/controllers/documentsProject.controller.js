import { Document_project } from "../models/Document_project.js";
import multer from "multer";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsProjects/");
  },
  filename: function (req, file, cb) {
    req.namefile = `projectDocument-${Date.now()}.${
      file.mimetype.split("/")[1]
    }`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadDocumentProject = upload.single("document");

export const getDocumentsProjects = async (req, res) => {
  try {
    const documents = await Document_project.findAll();
    res.status(200).json(documents);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createDocumentProject = async (req, res) => {
  try {
    const { name, project_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/documentsProjects/${req.namefile}`;
    const document = await Document_project.findOne({
      where: { url_document },
    });
    if (document) {
      return res.status(400).json({ message: "Document already exists" });
    }
    const newDocument = await Document_project.create({
      name,
      url_document,
      project_id,
    });
    res.status(201).json({
      message: "Document created successfully",
      data: newDocument,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneDocumentProject = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_project.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteDocumentProject = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_project.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    await document.destroy();
    res.status(200).json({ message: "Document deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateDocumentProject = async (req, res) => {
  try {
    const { id } = req.params;
    const document = await Document_project.findOne({ where: { id } });
    if (!document)
      return res.status(404).json({ message: "Document not found" });
    document.set(req.body);
    await document.save();
    res.status(200).json(document);
  } catch (error) {
    res.status(500).json(error);
  }
};
