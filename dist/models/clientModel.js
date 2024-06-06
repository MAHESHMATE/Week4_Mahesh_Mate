"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const organizationModel_1 = require("./organizationModel");
// Define a class that extends the Sequelize model and implements the ClientAttributes interface
class Client extends sequelize_1.Model {
}
exports.Client = Client;
// Define client model with attributes
Client.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: organizationModel_1.Organization,
            key: 'id',
        },
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isNdaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    isMsaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "clients",
    timestamps: false,
});
//# sourceMappingURL=clientModel.js.map