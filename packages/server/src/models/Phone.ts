import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface PhoneAttributes {
  id: number;
  number: string;
  description: string;
  company_id: number;
  status: number;
}

export type PhonePk = "id";
export type PhoneId = Phone[PhonePk];
export type PhoneCreationAttributes = Optional<PhoneAttributes, PhonePk>;

export class Phone extends Model<PhoneAttributes, PhoneCreationAttributes> implements PhoneAttributes {
  id!: number;
  number!: string;
  description!: string;
  company_id!: number;
  status!: number;

  // Phone belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Phone {
    Phone.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    number: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: "UQ__PhoneNum__FD291E41CF276623"
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
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Phone',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__PhoneNum__3213E83FC4BCB9AE",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__PhoneNum__FD291E41CF276623",
        unique: true,
        fields: [
          { name: "number" },
        ]
      },
    ]
  });
  return Phone;
  }
}
