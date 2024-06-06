"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sowModel_1 = require("./sowModel");
const sowPayPlanModel_1 = require("./sowPayPlanModel");
const clientModel_1 = require("./clientModel");
class Invoice extends sequelize_1.Model {
}
exports.Invoice = Invoice;
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.SOW,
            key: 'id',
        },
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowPayPlanModel_1.PaymentPlan,
            key: 'id',
        },
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: clientModel_1.Client,
            key: 'id',
        },
    },
    paymentReceivedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    invoiceVersionNo: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    paymentId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    invoiceAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    invoiceTaxAmount: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: 'invoices',
    timestamps: false,
});
//# sourceMappingURL=invoiceModel.js.map