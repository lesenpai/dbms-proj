import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { User, UserId } from './User';

export interface AgentAttributes {
  id: number;
  company_id: number;
  user_id: number;
}

export type AgentPk = "id";
export type AgentId = Agent[AgentPk];
export type AgentCreationAttributes = Optional<AgentAttributes, AgentPk>;

export class Agent extends Model<AgentAttributes, AgentCreationAttributes> implements AgentAttributes {
  id!: number;
  company_id!: number;
  user_id!: number;

  // Agent belongsTo User
  User!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Agent {
    Agent.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Agent',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Agent__3213E83FCC39FEF3",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Agent;
  }
}
