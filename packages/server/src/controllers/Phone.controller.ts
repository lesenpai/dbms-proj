import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON } from './';
import { Phone, PhoneAttributes, PhoneCreationAttributes, Company } from '@dbms-proj/models';

export type IPhoneJSON = PhoneAttributes & { Company?: ICompanyJSON; };

export class PhoneController extends Controller {
    public static model = Phone as ModelCtor<Phone>;

    public static async doCreate(data: PhoneCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<PhoneAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Phone, PhoneAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<PhoneAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<PhoneAttributes>, urole?: UserRole) {
        return super.doGetList<Phone, PhoneAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<PhoneAttributes> {
        return {
            attributes: ['id', 'number', 'description', 'status', 'company_id'],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                    ...CompanyController.fullAttr(safe, urole, ++deep),
                },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['number'])(q, limit);
    }

    // Service methods
}
