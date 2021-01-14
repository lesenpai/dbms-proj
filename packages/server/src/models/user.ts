import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Admin, AdminId } from './Admin';
import type { Agent, AgentId } from './Agent';
import type { Role, RoleId } from './Role';

export interface UserAttributes {
  id: number;
  login: string;
  password: string;
  surname: string;
  name: string;
  patronym?: string;
  dob: string;
  phone: string;
  email: string;
  photo_path?: string;
  role_id?: number;
}

export type UserPk = "id";
export type UserId = User[UserPk];
export type UserCreationAttributes = Optional<UserAttributes, UserPk>;

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: number;
  login!: string;
  password!: string;
  surname!: string;
  name!: string;
  patronym?: string;
  dob!: string;
  phone!: string;
  email!: string;
  photo_path?: string;
  role_id?: number;

  // User hasMany Admin
  Admins!: Admin[];
  getAdmins!: Sequelize.HasManyGetAssociationsMixin<Admin>;
  setAdmins!: Sequelize.HasManySetAssociationsMixin<Admin, AdminId>;
  addAdmin!: Sequelize.HasManyAddAssociationMixin<Admin, AdminId>;
  addAdmins!: Sequelize.HasManyAddAssociationsMixin<Admin, AdminId>;
  createAdmin!: Sequelize.HasManyCreateAssociationMixin<Admin>;
  removeAdmin!: Sequelize.HasManyRemoveAssociationMixin<Admin, AdminId>;
  removeAdmins!: Sequelize.HasManyRemoveAssociationsMixin<Admin, AdminId>;
  hasAdmin!: Sequelize.HasManyHasAssociationMixin<Admin, AdminId>;
  hasAdmins!: Sequelize.HasManyHasAssociationsMixin<Admin, AdminId>;
  countAdmins!: Sequelize.HasManyCountAssociationsMixin;
  // User hasMany Agent
  Agents!: Agent[];
  getAgents!: Sequelize.HasManyGetAssociationsMixin<Agent>;
  setAgents!: Sequelize.HasManySetAssociationsMixin<Agent, AgentId>;
  addAgent!: Sequelize.HasManyAddAssociationMixin<Agent, AgentId>;
  addAgents!: Sequelize.HasManyAddAssociationsMixin<Agent, AgentId>;
  createAgent!: Sequelize.HasManyCreateAssociationMixin<Agent>;
  removeAgent!: Sequelize.HasManyRemoveAssociationMixin<Agent, AgentId>;
  removeAgents!: Sequelize.HasManyRemoveAssociationsMixin<Agent, AgentId>;
  hasAgent!: Sequelize.HasManyHasAssociationMixin<Agent, AgentId>;
  hasAgents!: Sequelize.HasManyHasAssociationsMixin<Agent, AgentId>;
  countAgents!: Sequelize.HasManyCountAssociationsMixin;
  // User belongsTo Role
  Role!: Role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<Role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<Role, RoleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<Role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof User {
    User.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    login: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: "UQ__User__7838F2728F565592"
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    surname: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    patronym: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false
    },
    photo_path: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Role',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'User',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__User__3213E83FEBF2DC13",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__User__7838F2728F565592",
        unique: true,
        fields: [
          { name: "login" },
        ]
      },
    ]
  });
  return User;
  }
}
