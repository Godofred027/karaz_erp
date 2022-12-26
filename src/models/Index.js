import { Bank } from "./Bank.js";
import { Bill } from "./Bill.js";
import { Cash_or_credit } from "./Cash_or_credit.js";
import { Client } from "./client.js";
import { Document_project } from "./Document_project.js";
import { Investor } from "./Investor.js";
import { Paid_seller } from "./Paid_seller.js";
import { Project } from "./Project.js";
import { Role } from "./Role.js";
import { Sale } from "./Sale.js";
import { Seller } from "./Seller.js";
import { State_investor } from "./State_investor.js";
import { State_paid_seller } from "./State_paid_seller.js";
import { State_project } from "./State_project.js";
import { Type_envoice } from "./Type_envoice.js";
import { Type_seller } from "./Type_seller.js";
import { User } from "./User.js";
import { Voucher_sale } from "./Voucher_sale.js";
import { Voucher_seller } from "./Voucher_seller.js";

// voucher_sale relation
Sale.hasMany(Voucher_sale, { foreignKey: "sale_id", sourceKey: "id" });
Voucher_sale.belongsTo(Sale, { foreignKey: "sale_id", targetId: "id" });

// voucher_seller relation
Seller.hasMany(Voucher_seller, { foreignKey: "seller_id", sourceKey: "id" });
Voucher_seller.belongsTo(Seller, { foreignKey: "seller_id", targetId: "id" });

// sales relation
Cash_or_credit.hasMany(Sale, {
  foreignKey: "cash_or_credit_id",
  sourceKey: "id",
});
Sale.belongsTo(Cash_or_credit, {
  foreignKey: "cash_or_credit_id",
  targetId: "id",
});

Client.hasMany(Sale, { foreignKey: "client_id", sourceKey: "id" });
Sale.belongsTo(Client, { foreignKey: "client_id", targetId: "id" });

Project.hasMany(Sale, { foreignKey: "project_id", sourceKey: "id" });
Sale.belongsTo(Project, { foreignKey: "project_id", targetId: "id" });

// paid_seller relation
State_paid_seller.hasMany(Paid_seller, {
  foreignKey: "state_paid_seller_id",
  sourceKey: "id",
});
Paid_seller.belongsTo(State_paid_seller, {
  foreignKey: "state_paid_seller_id",
  targetId: "id",
});

Seller.hasMany(Paid_seller, { foreignKey: "seller_id", sourceKey: "id" });
Paid_seller.belongsTo(Seller, { foreignKey: "seller_id", targetId: "id" });

Sale.hasMany(Paid_seller, { foreignKey: "sale_id", sourceKey: "id" });
Paid_seller.belongsTo(Sale, { foreignKey: "sale_id", targetId: "id" });

// seller relation
Bank.hasMany(Seller, { foreignKey: "bank_id", sourceKey: "id" });
Seller.belongsTo(Bank, { foreignKey: "bank_id", targetId: "id" });

Type_seller.hasMany(Seller, { foreignKey: "type_seller_id", sourceKey: "id" });
Seller.belongsTo(Type_seller, { foreignKey: "type_seller_id", targetId: "id" });

User.hasMany(Seller, { foreignKey: "user_id", sourceKey: "id" });
Seller.belongsTo(User, { foreignKey: "user_id", targetId: "id" });

// project relation
State_project.hasMany(Project, {
  foreignKey: "state_project_id",
  sourceKey: "id",
});
Project.belongsTo(State_project, {
  foreignKey: "state_project_id",
  targetId: "id",
});

User.hasMany(Project, { foreignKey: "user_id", sourceKey: "id" });
Project.belongsTo(User, { foreignKey: "user_id", targetId: "id" });

// investor relation
User.hasMany(Investor, { foreignKey: "user_id", sourceKey: "id" });
Investor.belongsTo(User, { foreignKey: "user_id", targetId: "id" });

Project.hasMany(Investor, { foreignKey: "project_id", sourceKey: "id" });
Investor.belongsTo(Project, { foreignKey: "project_id", targetId: "id" });

State_investor.hasMany(Investor, {
  foreignKey: "state_investor_id",
  sourceKey: "id",
});
Investor.belongsTo(State_investor, {
  foreignKey: "state_investor_id",
  targetId: "id",
});

Bank.hasMany(Investor, { foreignKey: "bank_id", sourceKey: "id" });
Investor.belongsTo(Bank, { foreignKey: "bank_id", targetId: "id" });

// bill relation
Type_envoice.hasMany(Bill, { foreignKey: "type_envoice_id", sourceKey: "id" });
Bill.belongsTo(Type_envoice, { foreignKey: "type_envoice_id", targetId: "id" });

User.hasMany(Bill, { foreignKey: "user_id", sourceKey: "id" });
Bill.belongsTo(User, { foreignKey: "user_id", targetId: "id" });

Project.hasMany(Bill, { foreignKey: "project_id", sourceKey: "id" });
Bill.belongsTo(Project, { foreignKey: "project_id", targetId: "id" });

// document_project relation
Project.hasMany(Document_project, {
  foreignKey: "project_id",
  sourceKey: "id",
});
Document_project.belongsTo(Project, {
  foreignKey: "project_id",
  targetId: "id",
});
