import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company2SocialNetwork, Company2SocialNetworkId } from './Company2SocialNetwork';

export interface SocialNetworkAttributes {
  id: number;
  name: string;
  image_path?: string;
}

export type SocialNetworkPk = "id";
export type SocialNetworkId = SocialNetwork[SocialNetworkPk];
export type SocialNetworkCreationAttributes = Optional<SocialNetworkAttributes, SocialNetworkPk>;

export class SocialNetwork extends Model<SocialNetworkAttributes, SocialNetworkCreationAttributes> implements SocialNetworkAttributes {
  id!: number;
  name!: string;
  image_path?: string;

  // SocialNetwork hasMany Company2SocialNetwork
  Company2SocialNetworks!: Company2SocialNetwork[];
  getCompany2SocialNetworks!: Sequelize.HasManyGetAssociationsMixin<Company2SocialNetwork>;
  setCompany2SocialNetworks!: Sequelize.HasManySetAssociationsMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  addCompany2SocialNetwork!: Sequelize.HasManyAddAssociationMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  addCompany2SocialNetworks!: Sequelize.HasManyAddAssociationsMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  createCompany2SocialNetwork!: Sequelize.HasManyCreateAssociationMixin<Company2SocialNetwork>;
  removeCompany2SocialNetwork!: Sequelize.HasManyRemoveAssociationMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  removeCompany2SocialNetworks!: Sequelize.HasManyRemoveAssociationsMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  hasCompany2SocialNetwork!: Sequelize.HasManyHasAssociationMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  hasCompany2SocialNetworks!: Sequelize.HasManyHasAssociationsMixin<Company2SocialNetwork, Company2SocialNetworkId>;
  countCompany2SocialNetworks!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof SocialNetwork {
    SocialNetwork.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "UQ__SocialNe__72E12F1B1961E1FB"
    },
    image_path: {
      type: DataTypes.STRING(256),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SocialNetwork',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SocialNe__3213E83FDE62BE21",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__SocialNe__72E12F1B1961E1FB",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  });
  return SocialNetwork;
  }
}
