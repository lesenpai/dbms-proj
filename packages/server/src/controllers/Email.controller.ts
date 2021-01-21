import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON } from './';
import { Email, EmailAttributes, EmailCreationAttributes, Company } from '@dbms-proj/models';

export type IEmailJSON = EmailAttributes & { Company?: ICompanyJSON; };

export class EmailController extends Controller {
    public static model = Email as ModelCtor<Email>;

    public static async doCreate(data: EmailCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<EmailAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Email, EmailAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<EmailAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<EmailAttributes>, urole?: UserRole) {
        return super.doGetList<Email, EmailAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<EmailAttributes> {
        return {
            attributes: ['id', 'addr', 'description', 'status', 'company_id'],
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
        return await this.sequelizeSearchFields(['addr'])(q, limit);
    }

    // Service methods
}
