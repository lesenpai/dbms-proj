import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import { Activity, ActivityAttributes, ActivityCreationAttributes } from '@dbms-proj/models';

export type IActivityJSON = ActivityAttributes;

export class ActivityController extends Controller {
    public static model = Activity as ModelCtor<Activity>;

    public static async doCreate(data: ActivityCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ActivityAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Activity, ActivityAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ActivityAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<ActivityAttributes>, urole?: UserRole) {
        return super.doGetList<Activity, ActivityAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<ActivityAttributes> {
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
