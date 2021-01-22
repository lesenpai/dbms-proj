import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';
import type { SocialNetwork, SocialNetworkId } from './SocialNetwork';

export interface Company2SocialNetworkAttributes {
  id: number;
  addr: string;
  company_id: number;
  network_id: number;
}

export type Company2SocialNetworkPk = "id";
export type Company2SocialNetworkId = Company2SocialNetwork[Company2SocialNetworkPk];
export type Company2SocialNetworkCreationAttributes = Optional<Company2SocialNetworkAttributes, Company2SocialNetworkPk>;

export class Company2SocialNetwork extends Model<Company2SocialNetworkAttributes, Company2SocialNetworkCreationAttributes> implements Company2SocialNetworkAttributes {
  id!: number;
  addr!: string;
  company_id!: number;
  network_id!: number;

  // Company2SocialNetwork belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;
  // Company2SocialNetwork belongsTo SocialNetwork
  SocialNetwork!: SocialNetwork;
  getSocialNetwork!: Sequelize.BelongsToGetAssociationMixin<SocialNetwork>;
  setSocialNetwork!: Sequelize.BelongsToSetAssociationMixin<SocialNetwork, SocialNetworkId>;
  createSocialNetwork!: Sequelize.BelongsToCreateAssociationMixin<SocialNetwork>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company2SocialNetwork {
    Company2SocialNetwork.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    addr: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'id'
      }
    },
    network_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'SocialNetwork',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Company2SocialNetwork',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Company2__3213E83FDACBDEC1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Company2SocialNetwork;
  }
}
