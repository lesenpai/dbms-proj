import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Activity, ActivityId } from './Activity';
import type { Company, CompanyId } from './Company';

export interface Company2ActivityAttributes {
  id: number;
  company_id: number;
  activity_id: number;
}

export type Company2ActivityPk = "id";
export type Company2ActivityId = Company2Activity[Company2ActivityPk];
export type Company2ActivityCreationAttributes = Optional<Company2ActivityAttributes, Company2ActivityPk>;

export class Company2Activity extends Model<Company2ActivityAttributes, Company2ActivityCreationAttributes> implements Company2ActivityAttributes {
  id!: number;
  company_id!: number;
  activity_id!: number;

  // Company2Activity belongsTo Activity
  Activity!: Activity;
  getActivity!: Sequelize.BelongsToGetAssociationMixin<Activity>;
  setActivity!: Sequelize.BelongsToSetAssociationMixin<Activity, ActivityId>;
  createActivity!: Sequelize.BelongsToCreateAssociationMixin<Activity>;
  // Company2Activity belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company2Activity {
    Company2Activity.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    activity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Activity',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Company2Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__CompanyA__3213E83F2C1452B9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Company2Activity;
  }
}
