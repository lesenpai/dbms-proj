import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface WorkingHoursAttributes {
  id: number;
  start_time: string;
  end_time: string;
  short_day_end_time?: string;
  company_id: number;
}

export type WorkingHoursPk = "id";
export type WorkingHoursId = WorkingHours[WorkingHoursPk];
export type WorkingHoursCreationAttributes = Optional<WorkingHoursAttributes, WorkingHoursPk>;

export class WorkingHours extends Model<WorkingHoursAttributes, WorkingHoursCreationAttributes> implements WorkingHoursAttributes {
  id!: number;
  start_time!: string;
  end_time!: string;
  short_day_end_time?: string;
  company_id!: number;

  // WorkingHours belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof WorkingHours {
    WorkingHours.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    short_day_end_time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'WorkingHours',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__WorkingH__3213E83F314547F5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return WorkingHours;
  }
}
