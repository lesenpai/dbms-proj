import Sequelize, { DataTypes, Model, Optional } from 'sequelize';

export interface Agent_Password_ChangelogAttributes {
  agentId: number;
  oldPassword: string;
  newPassword: string;
  datetime: Date;
}

export type Agent_Password_ChangelogCreationAttributes = Agent_Password_ChangelogAttributes;

export class Agent_Password_Changelog extends Model<Agent_Password_ChangelogAttributes, Agent_Password_ChangelogCreationAttributes> implements Agent_Password_ChangelogAttributes {
  agentId!: number;
  oldPassword!: string;
  newPassword!: string;
  datetime!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Agent_Password_Changelog {
    Agent_Password_Changelog.init({
    agentId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    oldPassword: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    newPassword: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Agent_Password_Changelog',
    schema: 'dbo',
    timestamps: false
  });
  return Agent_Password_Changelog;
  }
}
