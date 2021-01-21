import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, CompanyController, ICompanyJSON, UserController, IUserJSON } from './';
import { Agent, AgentAttributes, AgentCreationAttributes, Company, User } from '@dbms-proj/models';

export type IAgentJSON = AgentAttributes & { Company?: ICompanyJSON; User?: IUserJSON; };

export class AgentController extends Controller {
    public static model = Agent as ModelCtor<Agent>;

    public static async doCreate(data: AgentCreationAttributes, urole?: UserRole) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<AgentAttributes>, data: any, urole?: UserRole) {
        return super.doUpdate<Agent, AgentAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<AgentAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<AgentAttributes>, urole?: UserRole) {
        return super.doGetList<Agent, AgentAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<AgentAttributes> {
        return {
            attributes: ['id', 'company_id', 'user_id'],
            include: [
                {
                    // @ts-ignore
                    model: Company,
                    ...CompanyController.fullAttr(safe, urole, ++deep),
                },
                {
                    // @ts-ignore
                    model: User,
                    ...UserController.fullAttr(safe, urole, ++deep),
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
