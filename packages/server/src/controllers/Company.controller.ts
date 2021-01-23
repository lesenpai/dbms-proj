import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import { Company, CompanyAttributes, CompanyCreationAttributes } from '@dbms-proj/models';

export type ICompanyJSON = CompanyAttributes;

export class CompanyController extends Controller {
    public static model = Company as ModelCtor<Company>;

    public static async doCreate(data: CompanyCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<CompanyAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Company, CompanyAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<CompanyAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<CompanyAttributes>, urole?: UserRole) {
        return super.doGetList<Company, CompanyAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<CompanyAttributes> {
        return {
            attributes: ['id', 'full_name', 'short_name', 'image_path', 'country', 'city', 'street', 'building', 'office', 'description', 'url'],
            include: [],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['full_name', 'short_name', 'description'])(q, limit);
    }

    // Service methods
}
