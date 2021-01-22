import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON } from './';
import { WorkingHours, WorkingHoursAttributes, WorkingHoursCreationAttributes, Company } from '@dbms-proj/models';

export type IWorkingHoursJSON = WorkingHoursAttributes & { Company?: ICompanyJSON; };

export class WorkingHoursController extends Controller {
    public static model = WorkingHours as ModelCtor<WorkingHours>;

    public static async doCreate(data: WorkingHoursCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<WorkingHoursAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<WorkingHours, WorkingHoursAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<WorkingHoursAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<WorkingHoursAttributes>, urole?: UserRole) {
        return super.doGetList<WorkingHours, WorkingHoursAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<WorkingHoursAttributes> {
        return {
            attributes: ['id', 'start_time', 'end_time', 'short_day_end_time', 'company_id'],
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
