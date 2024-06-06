"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = __importDefault(require("../postgresDB/pgConfig"));
const organization_1 = require("./organization");
// Define a class that extends the Sequelize model and implements the ClientAttributes interface
class Client extends sequelize_1.Model {
}
exports.Client = Client;
// Define client model with attributes
Client.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: organization_1.Organization,
            key: 'id',
        },
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
    },
    isNdaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    isMsaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
    },
}, {
    sequelize: pgConfig_1.default,
    tableName: "clients",
    timestamps: false,
});
//# sourceMappingURL=client.js.map