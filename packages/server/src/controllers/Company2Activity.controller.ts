import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON, ActivityController, IActivityJSON } from './';
import { Company2Activity, Company2ActivityAttributes, Company2ActivityCreationAttributes, Company, Activity } from '@dbms-proj/models';

export type ICompany2ActivityJSON = Company2ActivityAttributes & { Company?: ICompanyJSON; Activity?: IActivityJSON; };

export class Company2ActivityController extends Controller {
    public static model = Company2Activity as ModelCtor<Company2Activity>;

    public static async doCreate(data: Company2ActivityCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<Company2ActivityAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Company2Activity, Company2ActivityAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<Company2ActivityAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<Company2ActivityAttributes>, urole?: UserRole) {
        return super.doGetList<Company2Activity, Company2ActivityAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<Company2ActivityAttributes> {
        return {
            attributes: ['id', 'company_id', 'activity_id'],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                    ...CompanyController.fullAttr(safe, urole, ++deep),
                },
                {
                    // @ts-ignore
                    model: Activity,
                    ...ActivityController.fullAttr(safe, urole, ++deep),
                },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['name'])(q, limit);
    }

    // Service methods
}
