import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Item, ItemId } from './Item';

export interface ItemTypeAttributes {
  id: number;
  name: string;
}

export type ItemTypePk = "id";
export type ItemTypeId = ItemType[ItemTypePk];
export type ItemTypeCreationAttributes = Optional<ItemTypeAttributes, ItemTypePk>;

export class ItemType extends Model<ItemTypeAttributes, ItemTypeCreationAttributes> implements ItemTypeAttributes {
  id!: number;
  name!: string;

  // ItemType hasMany Item
  Items!: Item[];
  getItems!: Sequelize.HasManyGetAssociationsMixin<Item>;
  setItems!: Sequelize.HasManySetAssociationsMixin<Item, ItemId>;
  addItem!: Sequelize.HasManyAddAssociationMixin<Item, ItemId>;
  addItems!: Sequelize.HasManyAddAssociationsMixin<Item, ItemId>;
  createItem!: Sequelize.HasManyCreateAssociationMixin<Item>;
  removeItem!: Sequelize.HasManyRemoveAssociationMixin<Item, ItemId>;
  removeItems!: Sequelize.HasManyRemoveAssociationsMixin<Item, ItemId>;
  hasItem!: Sequelize.HasManyHasAssociationMixin<Item, ItemId>;
  hasItems!: Sequelize.HasManyHasAssociationsMixin<Item, ItemId>;
  countItems!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ItemType {
    ItemType.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'ItemType',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__ItemType__3213E83FB4185B9C",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return ItemType;
  }
}
