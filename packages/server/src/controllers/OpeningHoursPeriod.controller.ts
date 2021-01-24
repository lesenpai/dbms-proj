import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON } from './';
import { OpeningHoursPeriod, OpeningHoursPeriodAttributes, OpeningHoursPeriodCreationAttributes, Company } from '@dbms-proj/models';

export type IOpeningHoursPeriodJSON = OpeningHoursPeriodAttributes & { Company?: ICompanyJSON; };

export class OpeningHoursPeriodController extends Controller {
    public static model = OpeningHoursPeriod as ModelCtor<OpeningHoursPeriod>;

    public static async doCreate(data: OpeningHoursPeriodCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<OpeningHoursPeriodAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<OpeningHoursPeriod, OpeningHoursPeriodAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<OpeningHoursPeriodAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<OpeningHoursPeriodAttributes>, urole?: UserRole) {
        return super.doGetList<OpeningHoursPeriod, OpeningHoursPeriodAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<OpeningHoursPeriodAttributes> {
        return {
            attributes: ['id', 'first_day_id', 'last_day_id', 'start_time', 'end_time', 'company_id', 'status'],
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
        return await this.sequelizeSearchFields(['name'])(q, limit);
    }

    // Service methods
}
