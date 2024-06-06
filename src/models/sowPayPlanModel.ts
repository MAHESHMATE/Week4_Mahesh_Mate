import { Model, DataTypes } from 'sequelize';
import sequelize from '../postgresDB/pgConfig';
import { SOW } from './sowModel';
import { Client } from './clientModel';

interface PaymentPlanAttributes {
  id: string;
  sowId: string;
  customerId: string;
  plannedInvoiceDate: Date;
  totalActualAmount: number;
}

class PaymentPlan extends Model<PaymentPlanAttributes> implements PaymentPlanAttributes {
  public id!: string;
  public sowId!: string;
  public customerId!: string;
  public plannedInvoiceDate!: Date;
  public totalActualAmount!: number;
}

PaymentPlan.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: SOW,
        key: 'id',
      },
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: Client,
        key: 'id',
      },
    },
    plannedInvoiceDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    totalActualAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "payment_plans",
    timestamps: false,
  }
);

export { PaymentPlan };




