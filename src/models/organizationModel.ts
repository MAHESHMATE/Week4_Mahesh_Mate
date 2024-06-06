import { Model, DataTypes} from 'sequelize';
import sequelize from '../postgresDB/pgConfig';

// Define interface for organization attributes
interface OrganizationAttributes {
  id: string;
  gstNo: string;
  panNo: string;
  legalOrganizationName: string;
  invoiceTemplateId: string;
  shortName: string;
  contactName: string;
  displayName: string;
  email: string;
  addressId: string;
  phone: string;
}

// Define a class that extends the Sequelize model and implements the OrganizationAttributes interface
class Organization extends Model<OrganizationAttributes> implements OrganizationAttributes {
  public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public addressId!: string;
  public phone!: string;
}

// Define organization model with attributes
Organization.init(
  {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    gstNo: {
      type: DataTypes.STRING,
    },
    panNo: {
      type: DataTypes.STRING,
    },
    legalOrganizationName: {
      type: DataTypes.STRING,
    },
    invoiceTemplateId: {
      type: DataTypes.STRING,
    },
    shortName: {
      type: DataTypes.STRING,
    },
    contactName: {
      type: DataTypes.STRING,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    addressId: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "organizations",
    timestamps: false,
  }
);

// Export the organization model
export { Organization };
