import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Item, ItemCreationAttributes, ItemAttributes } from '../models/Item';
import { Controller } from './controller';
import { ItemCategory, ItemType } from '../models/init-models';

export type IItemJSON = ItemAttributes;

export class ItemController extends Controller {
    public static model = Item as ModelCtor<Item>;

    public static async doCreate(data: ItemCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ItemAttributes>, data: any) {
        return super.doUpdate<Item, ItemAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ItemAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<ItemAttributes>) {
        return super.doGetList<Item, ItemAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<ItemAttributes> {
        return {
            attributes: ['id', 'name', 'image_path', 'props', 'description', 'category_id', 'item_type_id'],
            include: [
                {
                    // @ts-ignore
                    model: ItemCategory,
                },
                // TODO: нужна ли эта таблица вообще?
                {
                    // @ts-ignore
                    model: ItemType,
                },
            ],
        };
    }
}
