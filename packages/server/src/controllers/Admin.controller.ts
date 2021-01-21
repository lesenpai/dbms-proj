import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, UserController, IUserJSON } from './';
import { Admin, AdminAttributes, AdminCreationAttributes, User } from '@dbms-proj/models';

export type IAdminJSON = AdminAttributes & { User?: IUserJSON; };

export class AdminController extends Controller {
    public static model = Admin as ModelCtor<Admin>;

    public static async doCreate(data: AdminCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<AdminAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Admin, AdminAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<AdminAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<AdminAttributes>, urole?: UserRole) {
        return super.doGetList<Admin, AdminAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<AdminAttributes> {
        return {
            attributes: ['id', 'passport_ser', 'passport_id', 'country', 'city', 'street', 'building', 'flat', 'user_id'],
            include: [
                {
                    // @ts-ignore
                    model: User,
                    ...UserController.fullAttr(safe, urole, ++deep),
                },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['surname', 'name', 'patronym'])(q, limit);
    }

    // Service methods
}
