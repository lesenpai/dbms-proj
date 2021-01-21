import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, ItemCategoryController, IItemCategoryJSON, ItemTypeController, IItemTypeJSON } from './';
import { Item, ItemAttributes, ItemCreationAttributes, ItemCategory, ItemType } from '@dbms-proj/models';

export type IItemJSON = ItemAttributes & { ItemCategory?: IItemCategoryJSON; ItemType?: IItemTypeJSON; };

export class ItemController extends Controller {
    public static model = Item as ModelCtor<Item>;

    public static async doCreate(data: ItemCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ItemAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Item, ItemAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ItemAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<ItemAttributes>, urole?: UserRole) {
        return super.doGetList<Item, ItemAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<ItemAttributes> {
        return {
            attributes: ['id', 'name', 'image_path', 'props', 'description', 'category_id', 'item_type_id'],
            include: [
                {
                    // @ts-ignore
                    model: ItemCategory,
                    ...ItemCategoryController.fullAttr(safe, urole, ++deep),
                },
                {
                    // @ts-ignore
                    model: ItemType,
                    ...ItemTypeController.fullAttr(safe, urole, ++deep),
                },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['name', 'description'])(q, limit);
    }

    // Service methods
}
