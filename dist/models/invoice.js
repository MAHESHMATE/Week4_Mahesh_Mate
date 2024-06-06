"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sow_1 = require("./sow");
// Define a class that extends the Sequelize model and implements the InvoiceAttributes interface
class Invoice extends sequelize_1.Model {
}
exports.Invoice = Invoice;
// Define invoice model with attributes
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    totalInvoiceValue: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sow_1.SOW,
            key: 'id',
        },
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
    },
    invoiceSentOn: {
        type: sequelize_1.DataTypes.DATE,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
    },
    paymentReceivedOn: {
        type: sequelize_1.DataTypes.DATE,
    },
    invoiceVersionNumber: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "invoices",
    timestamps: false,
});
//# sourceMappingURL=invoice.js.map