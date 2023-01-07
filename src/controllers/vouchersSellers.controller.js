import { Voucher_seller } from "../models/Voucher_seller.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/vouchersSellers/");
  },
  filename: function (req, file, cb) {
    req.namefile = `sellerVoucher-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadVoucherSeller = upload.single("document");

export const getVouchersSellers = async (req, res) => {
  try {
    const vouchers = await Voucher_seller.findAll();
    res.status(200).json(vouchers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createVoucherSeller = async (req, res) => {
  try {
    const { name, seller_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/vouchersSellers/${req.namefile}`;
    const voucher = await Voucher_seller.findOne({ where: { url_document } });
    if (voucher) {
      return res.status(400).json({ message: "Voucher already exists" });
    }
    const newVoucher = await Voucher_seller.create({
      name,
      url_document,
      seller_id,
    });
    res.status(201).json({
      message: "Voucher created successfully",
      data: newVoucher,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneVoucherSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await Voucher_seller.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    res.status(200).json(voucher);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVoucherSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await Voucher_seller.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    await voucher.destroy();
    res.status(200).json({ message: "Voucher deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateVoucherSeller = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, seller_id } = req.body;
    const voucher = await Voucher_seller.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    await voucher.update({ name, seller_id });
    res.status(200).json({ message: "Voucher updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
