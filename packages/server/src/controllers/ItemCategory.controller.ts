import { ModelCtor, FindOptions, QueryTypes } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import {
    ItemCategoryAttributes,
    ItemCategoryCreationAttributes,
    ItemCategory,
    ItemCreationAttributes,
} from '@dbms-proj/models';
import e, { json, Router } from 'express';
import { parseQuery } from '../crud/getList';
import { Database } from '../database';
import { setGetListHeaders } from '../crud/headers';

export type IItemCategoryJSON = ItemCategoryAttributes & { ItemCategory?: IItemCategoryJSON };

export class ItemCategoryController extends Controller {
    public static model = ItemCategory as ModelCtor<ItemCategory>;

    public static async doCreate(data: ItemCategoryCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<ItemCategoryAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<ItemCategory, ItemCategoryAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<ItemCategoryAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<ItemCategoryAttributes>, urole?: UserRole) {
        //@ts-ignore
        /* if (!options.where?.parent_category_id && !options.where?.id) {
            options.where = {
                ...{ ...(options.where ?? {}) },
                parent_category_id: null,
            };
        } */
        return super.doGetList<ItemCategory, ItemCategoryAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<ItemCategoryAttributes> {
        if (deep > 2) {
            return {};
        }
        return {
            attributes: ['id', 'name', 'parent_category_id'],
            //@ts-ignore
            include: [
                /* ...(deep < 3
                    ? [
                          {
                              // @ts-ignore  
                              model: ItemCategory,
                              ...ItemCategoryController.fullAttr(safe, urole, ++deep),
                          },
                      ]
                    : []), */
                // @ts-ignore
                // { model: ItemCategory, ...ItemCategoryController.fullAttr(safe, urole, ++deep) },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['name'])(q, limit);
    }

    // Service methods

    public static getRouter() {
        const router = Router();
        router.use(json());

        router.route('/breadcrumbs').get(
            // authRoles(UserRole.ADMIN),
            async (req, res, next) => {
                try {
                    const { limit, offset, order, where } = parseQuery(req.query);

                    const { rows, count } = await this.doGetCategoryBreadcrumbs({ offset, limit, order, where });

                    setGetListHeaders(res, offset, count, rows.length);
                    res.jsongo(rows);
                } catch (error) {
                    next(error);
                }
            }
        );

        return router;
    }

    public static async doGetCategoryBreadcrumbs(
        options: FindOptions<ItemCategoryAttributes>,
        urole?: UserRole
    ): Promise<{ rows: ItemCategoryAttributes[]; count: number }> {
        const where = options.where as any;
        let cat_id = where?.cat_id;
        if (!cat_id) {
            return { rows: [], count: 0 };
        }

        let [rows, count] = await Database.instance().db.query("SELECT dbo.ufn_GetCategoryTree(:cat_id) AS 'path'", {
            type: QueryTypes.RAW,
            replacements: { cat_id },
        });
        // console.log(rows, count);

        rows = rows.map((e: any, i) => ({ ...e, id: i }));

        return { rows, count } as { rows: ItemCategoryAttributes[]; count: number };
    }
}
