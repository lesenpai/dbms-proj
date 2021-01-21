import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON } from './';
import { Article, ArticleAttributes, ArticleCreationAttributes, Company } from '@dbms-proj/models';

export type IArticleJSON = ArticleAttributes & { Company?: ICompanyJSON; };

export class ArticleController extends Controller {
    public static model = Article as ModelCtor<Article>;

    public static async doCreate(data: ArticleCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ArticleAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Article, ArticleAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ArticleAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<ArticleAttributes>, urole?: UserRole) {
        return super.doGetList<Article, ArticleAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<ArticleAttributes> {
        return {
            attributes: ['id', 'date', 'title', 'image_path', 'text', 'status', 'company_id'],
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
        return await this.sequelizeSearchFields(['title', 'text'])(q, limit);
    }

    // Service methods
}
