import { Model, ModelCtor, FindOptions } from 'sequelize';
import { ItemCategory, ItemCategoryCreationAttributes, ItemCategoryAttributes } from '../models/ItemCategory';
import { Controller } from './controller';

export type IItemCategoryJSON = ItemCategoryAttributes;

export class ItemCategoryController extends Controller {
    public static model = ItemCategory as ModelCtor<ItemCategory>;

    public static async doCreate(data: ItemCategoryCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ItemCategoryAttributes>, data: any) {
        return super.doUpdate<ItemCategory, ItemCategoryAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ItemCategoryAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<ItemCategoryAttributes>) {
        return super.doGetList<ItemCategory, ItemCategoryAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<ItemCategoryAttributes> {
        return {
            attributes: ['id', 'name', 'parent_category_id'],
            include: [
                /* {
                    // @ts-ignore
                    model: ItemCategory,
                }, */
            ],
        };
    }
}
