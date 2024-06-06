"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlan = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sowModel_1 = require("./sowModel");
const clientModel_1 = require("./clientModel");
// Define a class that extends the Sequelize model and implements the PaymentPlanAttributes interface
class PaymentPlan extends sequelize_1.Model {
}
exports.PaymentPlan = PaymentPlan;
// Define PaymentPlan model with attributes
PaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.SOW,
            key: 'id',
        },
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: clientModel_1.Client,
            key: 'id',
        },
    },
    plannedInvoiceDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "payment_plans",
    timestamps: false,
});
//# sourceMappingURL=sowPlanModel.js.map