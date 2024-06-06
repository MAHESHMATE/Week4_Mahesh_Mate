"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOWPaymentPlanItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const sowModel_1 = require("./sowModel");
const sowPlanModel_1 = require("./sowPlanModel");
// Define a class that extends the Sequelize model and implements the SOWPaymentPlanItemAttributes interface
class SOWPaymentPlanItem extends sequelize_1.Model {
}
exports.SOWPaymentPlanItem = SOWPaymentPlanItem;
// Define SOWPaymentPlanItem model with attributes
SOWPaymentPlanItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowPlanModel_1.PaymentPlan,
            key: 'id',
        },
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: sowModel_1.SOW,
            key: 'id',
        },
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    modelName: 'SOWPaymentPlanItem',
    tableName: 'sow_payment_plan_items',
    timestamps: false,
});
//# sourceMappingURL=sowItemModel.js.map