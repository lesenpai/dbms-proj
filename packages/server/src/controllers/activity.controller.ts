import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Activity, ActivityCreationAttributes, ActivityAttributes } from '../models/Activity';
import { Controller } from './controller';

export type IActivityJSON = ActivityAttributes;

export class ActivityController extends Controller {
    public static model = Activity as ModelCtor<Activity>;

    public static async doCreate(data: ActivityCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ActivityAttributes>, data: any) {
        return super.doUpdate<Activity, ActivityAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ActivityAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<ActivityAttributes>) {
        return super.doGetList<Activity, ActivityAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<ActivityAttributes> {
        return {
            attributes: [
                'id',
                'name'
            ]
        };
    }
}
