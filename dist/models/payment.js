"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const invoice_1 = require("./invoice");
// Define a class that extends the Sequelize model and implements the PaymentAttributes interface
class Payment extends sequelize_1.Model {
}
exports.Payment = Payment;
// Define payment model with attributes
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    paymentDate: {
        type: sequelize_1.DataTypes.DATE,
    },
    forExAmount: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
    },
    indianAmount: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: invoice_1.Invoice,
            key: 'id',
        },
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    bankPaymentDetails: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "payments",
    timestamps: false, // Disable timestamps if not needed
});
//# sourceMappingURL=payment.js.map