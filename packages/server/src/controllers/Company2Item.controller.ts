import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON, ItemController, IItemJSON } from './';
import { Company2Item, Company2ItemAttributes, Company2ItemCreationAttributes, Company, Item } from '@dbms-proj/models';

export type ICompany2ItemJSON = Company2ItemAttributes & { Company?: ICompanyJSON; Item?: IItemJSON; };

export class Company2ItemController extends Controller {
    public static model = Company2Item as ModelCtor<Company2Item>;

    public static async doCreate(data: Company2ItemCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<Company2ItemAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Company2Item, Company2ItemAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<Company2ItemAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<Company2ItemAttributes>, urole?: UserRole) {
        return super.doGetList<Company2Item, Company2ItemAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<Company2ItemAttributes> {
        return {
            attributes: ['id', 'price', 'description', 'status', 'company_id', 'item_id'],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                    ...CompanyController.fullAttr(safe, urole, ++deep),
                },
                {
                    // @ts-ignore
                    model: Item,
                    ...ItemController.fullAttr(safe, urole, ++deep),
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
