import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Company2Item, Company2ItemCreationAttributes, Company2ItemAttributes } from '../models/Company2Item';
import { Company } from '../models/Company';
import { Item } from '../models/Item';
import { Controller } from './controller';

export type ICompany2ItemJSON = Company2ItemAttributes;

export class Company2ItemController extends Controller {
    public static model = Company2Item as ModelCtor<Company2Item>;

    public static async doCreate(data: Company2ItemCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<Company2ItemAttributes>, data: any) {
        return super.doUpdate<Company2Item, Company2ItemAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<Company2ItemAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<Company2ItemAttributes>) {
        return super.doGetList<Company2Item, Company2ItemAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<Company2ItemAttributes> {
        return {
            attributes: [
                'id',
                'price',
                'description',
                'company_id',
                'item_id',
                'status',
            ],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                },
                {
                    // @ts-ignore
                    model: Item,
                },
            ]
        };
    }
}
