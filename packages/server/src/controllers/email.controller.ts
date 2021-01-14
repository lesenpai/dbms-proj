import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Email, EmailCreationAttributes, EmailAttributes } from '../models/Email';
import { Company } from '../models/Company';
import { Controller } from './controller';

export type IEmailJSON = EmailAttributes;

export class EmailController extends Controller {
    public static model = Email as ModelCtor<Email>;

    public static async doCreate(data: EmailCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<EmailAttributes>, data: any) {
        return super.doUpdate<Email, EmailAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<EmailAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<EmailAttributes>) {
        return super.doGetList<Email, EmailAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<EmailAttributes> {
        return {
            attributes: [
                'id',
                'addr',
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
