import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface EmailAttributes {
  id: number;
  addr: string;
  description: string;
  company_id: number;
  status?: number;
}

export type EmailPk = "id";
export type EmailId = Email[EmailPk];
export type EmailCreationAttributes = Optional<EmailAttributes, EmailPk>;

export class Email extends Model<EmailAttributes, EmailCreationAttributes> implements EmailAttributes {
  id!: number;
  addr!: string;
  description!: string;
  company_id!: number;
  status?: number;

  // Email belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Email {
    Email.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: "UQ__Email__56B5DC5531901681"
    },
    description: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Email',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Email__3213E83F3C3A996B",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__Email__56B5DC5531901681",
        unique: true,
        fields: [
          { name: "addr" },
        ]
      },
    ]
  });
  return Email;
  }
}
