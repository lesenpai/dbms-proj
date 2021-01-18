import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface OpeningHoursPeriodAttributes {
  id: number;
  first_day_id: number;
  last_day_id: number;
  start_time: string;
  end_time: string;
  company_id: number;
  status: number;
}

export type OpeningHoursPeriodPk = "id";
export type OpeningHoursPeriodId = OpeningHoursPeriod[OpeningHoursPeriodPk];
export type OpeningHoursPeriodCreationAttributes = Optional<OpeningHoursPeriodAttributes, OpeningHoursPeriodPk>;

export class OpeningHoursPeriod extends Model<OpeningHoursPeriodAttributes, OpeningHoursPeriodCreationAttributes> implements OpeningHoursPeriodAttributes {
  id!: number;
  first_day_id!: number;
  last_day_id!: number;
  start_time!: string;
  end_time!: string;
  company_id!: number;
  status!: number;

  // OpeningHoursPeriod belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof OpeningHoursPeriod {
    OpeningHoursPeriod.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    first_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_day_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
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
    tableName: 'OpeningHoursPeriod',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__OpeningH__3213E83F22956F7C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return OpeningHoursPeriod;
  }
}
