import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Admin, AdminCreationAttributes, AdminAttributes } from '../models/Admin';
import { Controller } from './controller';
import { User, UserAttributes } from '../models/User';

export type IAdminJSON = AdminAttributes & { User: UserAttributes };

export class AdminController extends Controller {
    public static model = Admin as ModelCtor<Admin>;

    public static async doCreate(data: AdminCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<AdminAttributes>, data: any) {
        return super.doUpdate<Admin, AdminAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<AdminAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<AdminAttributes>) {
        return super.doGetList<Admin, AdminAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<AdminAttributes> {
        return {
            attributes: [
                'id',
                'passport_ser',
                'passport_id',
                'country',
                'city',
                'street',
                'building',
                'flat',
                'user_id'
            ],
            include: [
                {
                    // @ts-ignore
                    model: User,
                },
            ]
        };
    }
}
