import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { User, UserId } from './User';

export interface AdminAttributes {
  id: number;
  passport_ser?: string;
  passport_id?: string;
  country?: string;
  city?: string;
  street?: string;
  building?: string;
  flat?: string;
  user_id: number;
}

export type AdminPk = "id";
export type AdminId = Admin[AdminPk];
export type AdminCreationAttributes = Optional<AdminAttributes, AdminPk>;

export class Admin extends Model<AdminAttributes, AdminCreationAttributes> implements AdminAttributes {
  id!: number;
  passport_ser?: string;
  passport_id?: string;
  country?: string;
  city?: string;
  street?: string;
  building?: string;
  flat?: string;
  user_id!: number;

  // Admin belongsTo User
  User!: User;
  getUser!: Sequelize.BelongsToGetAssociationMixin<User>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<User, UserId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<User>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Admin {
    Admin.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    passport_ser: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    passport_id: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    street: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    building: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    flat: {
      type: DataTypes.STRING(30),
      allowNull: true
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
    tableName: 'Admin',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Admin__3213E83F6CCA8EF2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Admin;
  }
}
