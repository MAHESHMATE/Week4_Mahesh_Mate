"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOW = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const client_1 = require("./client"); // Adjust the path as necessary
// Define a class that extends the Sequelize model and implements the SOWAttributes interface
class SOW extends sequelize_1.Model {
}
exports.SOW = SOW;
// Define SOW model with attributes
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: client_1.Client,
            key: 'id',
        },
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
    },
    validityPeriod: {
        type: sequelize_1.DataTypes.JSON,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: pgConfig_1.default, // Assumes 'sequelize' instance is already created and available
    tableName: "sows",
    timestamps: false, // Disable timestamps if not needed
});
//# sourceMappingURL=sow.js.map