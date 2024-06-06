import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { Client } from './clientModel';
import { PaymentPlan } from './sowPayPlanModel';

// Define interface for SOW attributes
interface SOWAttributes {
  id: string;
  invoiceEmailAddresses: string[];
  customerId: string;
  customerPONumber: string;
  title: string;
  customerSONumber: string;
  validityPeriod: { validFrom: Date; validUpto: Date };
  totalValue: number;
  currency: string;
}

class SOW extends Model<SOWAttributes> implements SOWAttributes {
  public id!: string;
  public invoiceEmailAddresses!: string[];
  public customerId!: string;
  public customerPONumber!: string;
  public title!: string;
  public customerSONumber!: string;
  public validityPeriod!: { validFrom: Date; validUpto: Date };
  public totalValue!: number;
  public currency!: string;
}

// Define SOW model with attributes
SOW.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    invoiceEmailAddresses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
    customerId: {
      type: DataTypes.STRING,
      references: {
        model: Client,
        key: 'id',
      },
    },
    customerPONumber: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    customerSONumber: {
      type: DataTypes.STRING,
    },
    validityPeriod: {
      type: DataTypes.JSON,
    },
    totalValue: {
      type: DataTypes.FLOAT,
    },
    currency: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "sows",
    timestamps: false,
  }
);

SOW.hasMany(PaymentPlan, { foreignKey: 'sowId' });
PaymentPlan.belongsTo(SOW, { foreignKey: 'sowId' });

// Export the SOW model
export { SOW };