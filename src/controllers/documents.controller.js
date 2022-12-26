import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/documentsTest/");
  },

  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

export const uploadDocument = upload.single("document");

export const getDocuments = async (req, res) => {
  res.send("Document Uploaded");
};

export const showDocuments = async (req, res) => {
  res.json([
    {
      name: "Recibo Claro",
      url: "http://localhost:5000/public/documentsTest/1671846833215-recibo.pdf",
    },
    {
      name: "Foto Random",
      url: "http://localhost:5000/public/documentsTest/1.jpg",
    },
  ]);
};
