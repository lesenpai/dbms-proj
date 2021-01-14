import { ModelCtor, FindOptions } from 'sequelize';
import { Role, RoleAttributes, RoleCreationAttributes } from '../models/Role';
import { Controller } from './controller';

export type IRoleJSON = RoleAttributes;

export class RoleController extends Controller {
    public static model = Role as ModelCtor<Role>;

    public static async doCreate(data: RoleCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<RoleAttributes>, data: any) {
        return super.doUpdate<Role, RoleAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<RoleAttributes>) {
        return super.doGetOne(options);
    }

    public static async doGetList(options: FindOptions<RoleAttributes>) {
        return super.doGetList<Role, RoleAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true): FindOptions<RoleAttributes> {
        return {
            attributes: ['id', 'name'],
        };
    }

    // Service methods

    public static async create(attr: RoleCreationAttributes) {
        let newRec = await this.model.create({
            ...attr,
        });
        return newRec;
    }
}
