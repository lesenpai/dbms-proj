import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Activity } from '../models/Activity';
import { Company } from '../models/Company';
import { Company2Activity, Company2ActivityCreationAttributes, Company2ActivityAttributes } from '../models/Company2Activity';
import { Controller } from './controller';

export type ICompany2ActivityJSON = Company2ActivityAttributes;

export class Company2ActivityController extends Controller {
    public static model = Company2Activity as ModelCtor<Company2Activity>;

    public static async doCreate(data: Company2ActivityCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<Company2ActivityAttributes>, data: any) {
        return super.doUpdate<Company2Activity, Company2ActivityAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<Company2ActivityAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<Company2ActivityAttributes>) {
        return super.doGetList<Company2Activity, Company2ActivityAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<Company2ActivityAttributes> {
        return {
            attributes: [
                'id',
                'company_id',
                'activity_id',
            ],
            // TODO: что делать с includ'ом?
            include: [
                {
                    // @ts-ignore
                    model: Company,
                }, 
                {
                    // @ts-ignore
                    model: Activity,
                },
            ]
        };
    }
}
