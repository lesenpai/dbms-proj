import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import { ItemType, ItemTypeAttributes, ItemTypeCreationAttributes } from '@dbms-proj/models';

export type IItemTypeJSON = ItemTypeAttributes;

export class ItemTypeController extends Controller {
    public static model = ItemType as ModelCtor<ItemType>;

    public static async doCreate(data: ItemTypeCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ItemTypeAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<ItemType, ItemTypeAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ItemTypeAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<ItemTypeAttributes>, urole?: UserRole) {
        return super.doGetList<ItemType, ItemTypeAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<ItemTypeAttributes> {
        return {
            attributes: ['id', 'name'],
            include: [],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['name'])(q, limit);
    }

    // Service methods
}
