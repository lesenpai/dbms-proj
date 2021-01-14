import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Article, ArticleCreationAttributes, ArticleAttributes } from '../models/Article';
import { Company } from '../models/Company';
import { Controller } from './controller';

export type IArticleJSON = ArticleAttributes;

export class ArticleController extends Controller {
    public static model = Article as ModelCtor<Article>;

    public static async doCreate(data: ArticleCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ArticleAttributes>, data: any) {
        return super.doUpdate<Article, ArticleAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ArticleAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<ArticleAttributes>) {
        return super.doGetList<Article, ArticleAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<ArticleAttributes> {
        return {
            attributes: [
                'id',
                'date',
                'title',
                'image_path',
                'text',
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
