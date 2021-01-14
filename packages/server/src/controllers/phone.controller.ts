import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Phone, PhoneCreationAttributes, PhoneAttributes } from '../models/Phone';
import { Company } from '../models/Company';
import { Controller } from './controller';

export type IPhoneJSON = PhoneAttributes;

export class PhoneController extends Controller {
    public static model = Phone as ModelCtor<Phone>;

    public static async doCreate(data: PhoneCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<PhoneAttributes>, data: any) {
        return super.doUpdate<Phone, PhoneAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<PhoneAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<PhoneAttributes>) {
        return super.doGetList<Phone, PhoneAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<PhoneAttributes> {
        return {
            attributes: [
                'id',
                'number',
                'description',
                'company_id',
                'status',
            ],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                },
            ]
        };
    }
}
