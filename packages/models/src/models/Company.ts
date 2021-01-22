import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Agent, AgentId } from './Agent';
import type { Article, ArticleId } from './Article';
import type { Company2Activity, Company2ActivityId } from './Company2Activity';
import type { Company2Item, Company2ItemId } from './Company2Item';
import type { Company2SocialNetwork, Company2SocialNetworkId } from './Company2SocialNetwork';
import type { Email, EmailId } from './Email';
import type { Phone, PhoneId } from './Phone';
import type { WorkingHours, WorkingHoursId } from './WorkingHours';

export interface CompanyAttributes {
  id: number;
  full_name: string;
  short_name?: string;
  image_path?: string;
  country: string;
  city: string;
  street: string;
  building: string;
  office?: string;
  description?: string;
  url?: string;
}

export type CompanyPk = "id";
export type CompanyId = Company[CompanyPk];
export type CompanyCreationAttributes = Optional<CompanyAttributes, CompanyPk>;

export class Company extends Model<CompanyAttributes, CompanyCreationAttributes> implements CompanyAttributes {
  id!: number;
  full_name!: string;
  short_name?: string;
  image_path?: string;
  country!: string;
  city!: string;
  street!: string;
  building!: string;
  office?: string;
  description?: string;
  url?: string;

  // Company hasMany Agent
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
  // Company hasMany Article
  Articles!: Article[];
  getArticles!: Sequelize.HasManyGetAssociationsMixin<Article>;
  setArticles!: Sequelize.HasManySetAssociationsMixin<Article, ArticleId>;
  addArticle!: Sequelize.HasManyAddAssociationMixin<Article, ArticleId>;
  addArticles!: Sequelize.HasManyAddAssociationsMixin<Article, ArticleId>;
  createArticle!: Sequelize.HasManyCreateAssociationMixin<Article>;
  removeArticle!: Sequelize.HasManyRemoveAssociationMixin<Article, ArticleId>;
  removeArticles!: Sequelize.HasManyRemoveAssociationsMixin<Article, ArticleId>;
  hasArticle!: Sequelize.HasManyHasAssociationMixin<Article, ArticleId>;
  hasArticles!: Sequelize.HasManyHasAssociationsMixin<Article, ArticleId>;
  countArticles!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany Company2Activity
  Company2Activities!: Company2Activity[];
  getCompany2Activities!: Sequelize.HasManyGetAssociationsMixin<Company2Activity>;
  setCompany2Activities!: Sequelize.HasManySetAssociationsMixin<Company2Activity, Company2ActivityId>;
  addCompany2Activity!: Sequelize.HasManyAddAssociationMixin<Company2Activity, Company2ActivityId>;
  addCompany2Activities!: Sequelize.HasManyAddAssociationsMixin<Company2Activity, Company2ActivityId>;
  createCompany2Activity!: Sequelize.HasManyCreateAssociationMixin<Company2Activity>;
  removeCompany2Activity!: Sequelize.HasManyRemoveAssociationMixin<Company2Activity, Company2ActivityId>;
  removeCompany2Activities!: Sequelize.HasManyRemoveAssociationsMixin<Company2Activity, Company2ActivityId>;
  hasCompany2Activity!: Sequelize.HasManyHasAssociationMixin<Company2Activity, Company2ActivityId>;
  hasCompany2Activities!: Sequelize.HasManyHasAssociationsMixin<Company2Activity, Company2ActivityId>;
  countCompany2Activities!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany Company2Item
  Company2Items!: Company2Item[];
  getCompany2Items!: Sequelize.HasManyGetAssociationsMixin<Company2Item>;
  setCompany2Items!: Sequelize.HasManySetAssociationsMixin<Company2Item, Company2ItemId>;
  addCompany2Item!: Sequelize.HasManyAddAssociationMixin<Company2Item, Company2ItemId>;
  addCompany2Items!: Sequelize.HasManyAddAssociationsMixin<Company2Item, Company2ItemId>;
  createCompany2Item!: Sequelize.HasManyCreateAssociationMixin<Company2Item>;
  removeCompany2Item!: Sequelize.HasManyRemoveAssociationMixin<Company2Item, Company2ItemId>;
  removeCompany2Items!: Sequelize.HasManyRemoveAssociationsMixin<Company2Item, Company2ItemId>;
  hasCompany2Item!: Sequelize.HasManyHasAssociationMixin<Company2Item, Company2ItemId>;
  hasCompany2Items!: Sequelize.HasManyHasAssociationsMixin<Company2Item, Company2ItemId>;
  countCompany2Items!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany Company2SocialNetwork
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
  // Company hasMany Email
  Emails!: Email[];
  getEmails!: Sequelize.HasManyGetAssociationsMixin<Email>;
  setEmails!: Sequelize.HasManySetAssociationsMixin<Email, EmailId>;
  addEmail!: Sequelize.HasManyAddAssociationMixin<Email, EmailId>;
  addEmails!: Sequelize.HasManyAddAssociationsMixin<Email, EmailId>;
  createEmail!: Sequelize.HasManyCreateAssociationMixin<Email>;
  removeEmail!: Sequelize.HasManyRemoveAssociationMixin<Email, EmailId>;
  removeEmails!: Sequelize.HasManyRemoveAssociationsMixin<Email, EmailId>;
  hasEmail!: Sequelize.HasManyHasAssociationMixin<Email, EmailId>;
  hasEmails!: Sequelize.HasManyHasAssociationsMixin<Email, EmailId>;
  countEmails!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany Phone
  Phones!: Phone[];
  getPhones!: Sequelize.HasManyGetAssociationsMixin<Phone>;
  setPhones!: Sequelize.HasManySetAssociationsMixin<Phone, PhoneId>;
  addPhone!: Sequelize.HasManyAddAssociationMixin<Phone, PhoneId>;
  addPhones!: Sequelize.HasManyAddAssociationsMixin<Phone, PhoneId>;
  createPhone!: Sequelize.HasManyCreateAssociationMixin<Phone>;
  removePhone!: Sequelize.HasManyRemoveAssociationMixin<Phone, PhoneId>;
  removePhones!: Sequelize.HasManyRemoveAssociationsMixin<Phone, PhoneId>;
  hasPhone!: Sequelize.HasManyHasAssociationMixin<Phone, PhoneId>;
  hasPhones!: Sequelize.HasManyHasAssociationsMixin<Phone, PhoneId>;
  countPhones!: Sequelize.HasManyCountAssociationsMixin;
  // Company hasMany WorkingHours
  WorkingHours!: WorkingHours[];
  getWorkingHours!: Sequelize.HasManyGetAssociationsMixin<WorkingHours>;
  setWorkingHours!: Sequelize.HasManySetAssociationsMixin<WorkingHours, WorkingHoursId>;
  addWorkingHour!: Sequelize.HasManyAddAssociationMixin<WorkingHours, WorkingHoursId>;
  addWorkingHours!: Sequelize.HasManyAddAssociationsMixin<WorkingHours, WorkingHoursId>;
  createWorkingHour!: Sequelize.HasManyCreateAssociationMixin<WorkingHours>;
  removeWorkingHour!: Sequelize.HasManyRemoveAssociationMixin<WorkingHours, WorkingHoursId>;
  removeWorkingHours!: Sequelize.HasManyRemoveAssociationsMixin<WorkingHours, WorkingHoursId>;
  hasWorkingHour!: Sequelize.HasManyHasAssociationMixin<WorkingHours, WorkingHoursId>;
  hasWorkingHours!: Sequelize.HasManyHasAssociationsMixin<WorkingHours, WorkingHoursId>;
  countWorkingHours!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Company {
    Company.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    full_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "UQ__Company__C8B4CE9F43C93308"
    },
    short_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      unique: "UQ__Company__0B895377E489F9B8"
    },
    image_path: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    street: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    building: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    office: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    url: {
      type: DataTypes.STRING(2048),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Company',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Company_ShortName_index",
        fields: [
          { name: "short_name" },
        ]
      },
      {
        name: "PK__Company__3213E83F8B614CD8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "UQ__Company__0B895377E489F9B8",
        unique: true,
        fields: [
          { name: "short_name" },
        ]
      },
      {
        name: "UQ__Company__C8B4CE9F43C93308",
        unique: true,
        fields: [
          { name: "full_name" },
        ]
      },
    ]
  });
  return Company;
  }
}
