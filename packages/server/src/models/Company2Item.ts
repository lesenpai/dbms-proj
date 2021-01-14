import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';
import type { Item, ItemId } from './Item';

export interface Company2ItemAttributes {
  id: number;
  price?: number;
  description?: string;
  company_id: number;
  item_id: number;
  status: number;
}

export type Company2ItemPk = "id";
export type Company2ItemId = Company2Item[Company2ItemPk];
export type Company2ItemCreationAttributes = Optional<Company2ItemAttributes, Company2ItemPk>;

export class Company2Item extends Model<Company2ItemAttributes, Company2ItemCreationAttributes> implements Company2ItemAttributes {
  id!: number;
  price?: number;
  description?: string;
  company_id!: number;
  item_id!: number;
  status!: number;

  // Company2Item belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // Company2Item belongsTo Item
  Item!: Item;
  getItem!: Sequelize.BelongsToGetAssociationMixin<Item>;
  setItem!: Sequelize.BelongsToSetAssociationMixin<Item, ItemId>;
  createItem!: Sequelize.BelongsToCreateAssociationMixin<Item>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company2Item {
    Company2Item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    price: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Item',
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
    tableName: 'Company2Item',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK__Company2__3213E83FA179AB4D",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Company2Item;
  }
}
