import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller } from './';
import { SocialNetwork, SocialNetworkAttributes, SocialNetworkCreationAttributes } from '@dbms-proj/models';

export type ISocialNetworkJSON = SocialNetworkAttributes;

export class SocialNetworkController extends Controller {
    public static model = SocialNetwork as ModelCtor<SocialNetwork>;

    public static async doCreate(data: SocialNetworkCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<SocialNetworkAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<SocialNetwork, SocialNetworkAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<SocialNetworkAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<SocialNetworkAttributes>, urole?: UserRole) {
        return super.doGetList<SocialNetwork, SocialNetworkAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<SocialNetworkAttributes> {
        return {
            attributes: ['id', 'name', 'image_path'],
            include: [],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['name'])(q, limit);
    }

    // Service methods
}
