import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Item, ItemId } from './Item';

export interface ItemCategoryAttributes {
    id: number;
    name: string;
    parent_category_id?: number;
}

export type ItemCategoryPk = 'id';
export type ItemCategoryId = ItemCategory[ItemCategoryPk];
export type ItemCategoryCreationAttributes = Optional<ItemCategoryAttributes, ItemCategoryPk>;

export class ItemCategory
    extends Model<ItemCategoryAttributes, ItemCategoryCreationAttributes>
    implements ItemCategoryAttributes {
    id!: number;
    name!: string;
    parent_category_id?: number;

    // ItemCategory hasMany Item
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
    // ItemCategory belongsTo ItemCategory
    ItemCategory!: ItemCategory;
    getItemCategory!: Sequelize.BelongsToGetAssociationMixin<ItemCategory>;
    setItemCategory!: Sequelize.BelongsToSetAssociationMixin<ItemCategory, ItemCategoryId>;
    createItemCategory!: Sequelize.BelongsToCreateAssociationMixin<ItemCategory>;

    static initModel(sequelize: Sequelize.Sequelize): typeof ItemCategory {
        ItemCategory.init(
            {
                id: {
                    autoIncrement: true,
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                },
                name: {
                    type: DataTypes.STRING(50),
                    allowNull: false,
                },
                parent_category_id: {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'ItemCategory',
                        key: 'id',
                    },
                },
            },
            {
                sequelize,
                tableName: 'ItemCategory',
                schema: 'dbo',
                timestamps: false,
                indexes: [
                    {
                        name: 'PK__ProductC__3213E83F9479122E',
                        unique: true,
                        fields: [{ name: 'id' }],
                    },
                ],
            }
        );
        return ItemCategory;
    }
}
