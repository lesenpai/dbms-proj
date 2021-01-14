import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { User, UserId } from './User';

export interface RoleAttributes {
  id: number;
  name: string;
}

export type RolePk = "id";
export type RoleId = Role[RolePk];
export type RoleCreationAttributes = Optional<RoleAttributes, RolePk>;

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  id!: number;
  name!: string;

  // Role hasMany User
  Users!: User[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<User>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<User, UserId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<User, UserId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<User, UserId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<User>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<User, UserId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<User, UserId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<User, UserId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<User, UserId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Role {
    Role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Role',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Role__3213E83F1678E39D",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Role;
  }
}
