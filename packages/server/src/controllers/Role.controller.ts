import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import { Role, RoleAttributes, RoleCreationAttributes } from '@dbms-proj/models';

export type IRoleJSON = RoleAttributes;

export class RoleController extends Controller {
    public static model = Role as ModelCtor<Role>;

    public static async doCreate(data: RoleCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<RoleAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Role, RoleAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<RoleAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<RoleAttributes>, urole?: UserRole) {
        return super.doGetList<Role, RoleAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<RoleAttributes> {
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
