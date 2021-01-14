import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Company, CompanyCreationAttributes, CompanyAttributes } from '../models/Company';
import { Controller } from './controller';

export type ICompanyJSON = CompanyAttributes;

export class CompanyController extends Controller {
    public static model = Company as ModelCtor<Company>;

    public static async doCreate(data: CompanyCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<CompanyAttributes>, data: any) {
        return super.doUpdate<Company, CompanyAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<CompanyAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<CompanyAttributes>) {
        return super.doGetList<Company, CompanyAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<CompanyAttributes> {
        return {
            attributes: [
                'id',
                'short_name',
                'full_name',
                'logo_path',
                'country',
                'city',
                'street',
                'building',
                'office',
                'description',
                'url'
            ]
        };
    }
}
