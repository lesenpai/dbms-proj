import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company2Item, Company2ItemId } from './Company2Item';
import type { ItemCategory, ItemCategoryId } from './ItemCategory';
import type { ItemType, ItemTypeId } from './ItemType';

export interface ItemAttributes {
  id: number;
  name: string;
  image_path?: string;
  props?: string;
  description?: string;
  category_id: number;
  item_type_id?: number;
}

export type ItemPk = "id";
export type ItemId = Item[ItemPk];
export type ItemCreationAttributes = Optional<ItemAttributes, ItemPk>;

export class Item extends Model<ItemAttributes, ItemCreationAttributes> implements ItemAttributes {
  id!: number;
  name!: string;
  image_path?: string;
  props?: string;
  description?: string;
  category_id!: number;
  item_type_id?: number;

  // Item hasMany Company2Item
  Company2Items!: Company2Item[];
  getCompany2Items!: Sequelize.HasManyGetAssociationsMixin<Company2Item>;
  setCompany2Items!: Sequelize.HasManySetAssociationsMixin<Company2Item, Company2ItemId>;
  addCompany2Item!: Sequelize.HasManyAddAssociationMixin<Company2Item, Company2ItemId>;
  addCompany2Items!: Sequelize.HasManyAddAssociationsMixin<Company2Item, Company2ItemId>;
  createCompany2Item!: Sequelize.HasManyCreateAssociationMixin<Company2Item>;
  removeCompany2Item!: Sequelize.HasManyRemoveAssociationMixin<Company2Item, Company2ItemId>;
  removeCompany2Items!: Sequelize.HasManyRemoveAssociationsMixin<Company2Item, Company2ItemId>;
  hasCompany2Item!: Sequelize.HasManyHasAssociationMixin<Company2Item, Company2ItemId>;
  hasCompany2Items!: Sequelize.HasManyHasAssociationsMixin<Company2Item, Company2ItemId>;
  countCompany2Items!: Sequelize.HasManyCountAssociationsMixin;
  // Item belongsTo ItemCategory
  ItemCategory!: ItemCategory;
  getItemCategory!: Sequelize.BelongsToGetAssociationMixin<ItemCategory>;
  setItemCategory!: Sequelize.BelongsToSetAssociationMixin<ItemCategory, ItemCategoryId>;
  createItemCategory!: Sequelize.BelongsToCreateAssociationMixin<ItemCategory>;
  // Item belongsTo ItemType
  ItemType!: ItemType;
  getItemType!: Sequelize.BelongsToGetAssociationMixin<ItemType>;
  setItemType!: Sequelize.BelongsToSetAssociationMixin<ItemType, ItemTypeId>;
  createItemType!: Sequelize.BelongsToCreateAssociationMixin<ItemType>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Item {
    Item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    props: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ItemCategory',
        key: 'id'
      }
    },
    item_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'ItemType',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Item',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Item_Name_index",
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "Item_Name_Props_index",
        fields: [
          { name: "name" },
          { name: "props" },
        ]
      },
      {
        name: "PK__Product__3213E83F7394C3FB",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Item;
  }
}
