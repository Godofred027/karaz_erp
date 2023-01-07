import { Voucher_sale } from "../models/Voucher_sale.js";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/uploads/vouchersSales/");
  },
  filename: function (req, file, cb) {
    req.namefile = `saleVoucher-${Date.now()}.${file.mimetype.split("/")[1]}`;
    cb(null, req.namefile);
  },
});
const upload = multer({ storage });
export const uploadVoucherSale = upload.single("document");

export const getVouchersSales = async (req, res) => {
  try {
    const vouchers = await Voucher_sale.findAll();
    res.status(200).json(vouchers);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createVoucherSale = async (req, res) => {
  try {
    const { name, sale_id } = req.body;
    const url_document = `https://api.aibrkaraz.com/public/vouchersSales/${req.namefile}`;
    const voucher = await Voucher_sale.findOne({ where: { url_document } });
    if (voucher) {
      return res.status(400).json({ message: "Voucher already exists" });
    }
    const newVoucher = await Voucher_sale.create({
      name,
      url_document,
      sale_id,
    });
    res.status(201).json({
      message: "Voucher created successfully",
      data: newVoucher,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOneVoucherSale = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await Voucher_sale.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    res.status(200).json(voucher);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteVoucherSale = async (req, res) => {
  try {
    const { id } = req.params;
    const voucher = await Voucher_sale.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    await Voucher_sale.destroy({ where: { id } });
    res.status(200).json({ message: "Voucher deleted successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateVoucherSale = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sale_id } = req.body;
    const voucher = await Voucher_sale.findOne({ where: { id } });
    if (!voucher) return res.status(404).json({ message: "Voucher not found" });
    await Voucher_sale.update({ name, sale_id }, { where: { id } });
    res.status(200).json({ message: "Voucher updated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
};
