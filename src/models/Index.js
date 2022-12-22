import { Bank } from "./Bank.js";
import { Cash_or_credit } from "./Cash_or_credit.js";
import { Role } from "./Role.js";
import { State_investor } from "./State_investor.js";
import { State_paid_seller } from "./State_paid_seller.js";
import { State_project } from "./State_project.js";
import { Type_seller } from "./Type_seller.js";
import { User } from "./User.js";

Role.hasMany(User, { foreignKey: "role_id", sourceKey: "id" });
User.belongsTo(Role, {
  foreignKey: "role_id",
  targetId: "id",
});
