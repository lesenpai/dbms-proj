import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company2Activity, Company2ActivityId } from './Company2Activity';

export interface ActivityAttributes {
  id: number;
  name: string;
}

export type ActivityPk = "id";
export type ActivityId = Activity[ActivityPk];
export type ActivityCreationAttributes = Optional<ActivityAttributes, ActivityPk>;

export class Activity extends Model<ActivityAttributes, ActivityCreationAttributes> implements ActivityAttributes {
  id!: number;
  name!: string;

  // Activity hasMany Company2Activity
  Company2Activities!: Company2Activity[];
  getCompany2Activities!: Sequelize.HasManyGetAssociationsMixin<Company2Activity>;
  setCompany2Activities!: Sequelize.HasManySetAssociationsMixin<Company2Activity, Company2ActivityId>;
  addCompany2Activity!: Sequelize.HasManyAddAssociationMixin<Company2Activity, Company2ActivityId>;
  addCompany2Activities!: Sequelize.HasManyAddAssociationsMixin<Company2Activity, Company2ActivityId>;
  createCompany2Activity!: Sequelize.HasManyCreateAssociationMixin<Company2Activity>;
  removeCompany2Activity!: Sequelize.HasManyRemoveAssociationMixin<Company2Activity, Company2ActivityId>;
  removeCompany2Activities!: Sequelize.HasManyRemoveAssociationsMixin<Company2Activity, Company2ActivityId>;
  hasCompany2Activity!: Sequelize.HasManyHasAssociationMixin<Company2Activity, Company2ActivityId>;
  hasCompany2Activities!: Sequelize.HasManyHasAssociationsMixin<Company2Activity, Company2ActivityId>;
  countCompany2Activities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Activity {
    Activity.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "UQ__Activity__72E12F1BC022934B"
    }
  }, {
    sequelize,
    tableName: 'Activity',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Activity__3213E83F92286237",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__Activity__72E12F1BC022934B",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  return Activity;
  }
}
