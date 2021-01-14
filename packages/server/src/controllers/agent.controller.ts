import { Model, ModelCtor, FindOptions } from 'sequelize';
import { Agent, AgentCreationAttributes, AgentAttributes } from '../models/Agent';
import { Controller } from './controller';

export type IAgentJSON = AgentAttributes;

export class AgentController extends Controller {
    public static model = Agent as ModelCtor<Agent>;

    public static async doCreate(data: AgentCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<AgentAttributes>, data: any) {
        return super.doUpdate<Agent, AgentAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<AgentAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<AgentAttributes>) {
        return super.doGetList<Agent, AgentAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<AgentAttributes> {
        return {
            attributes: [
                'id',
                'company_id',
                'user_id',
            ],
            include: [
                {
                    // @ts-ignore
                    model: User,
                },
            ]
        };
    }
}
