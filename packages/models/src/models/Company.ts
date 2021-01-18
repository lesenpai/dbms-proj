import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company2Activity, Company2ActivityId } from './Company2Activity';
import type { Company2Item, Company2ItemId } from './Company2Item';
import type { Email, EmailId } from './Email';
import type { OpeningHoursPeriod, OpeningHoursPeriodId } from './OpeningHoursPeriod';
import type { Phone, PhoneId } from './Phone';

export interface CompanyAttributes {
  id: number;
  full_name: string;
  short_name?: string;
  logo_path?: string;
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
  logo_path?: string;
  country!: string;
  city!: string;
  street!: string;
  building!: string;
  office?: string;
  description?: string;
  url?: string;

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
  // Company hasMany OpeningHoursPeriod
  OpeningHoursPeriods!: OpeningHoursPeriod[];
  getOpeningHoursPeriods!: Sequelize.HasManyGetAssociationsMixin<OpeningHoursPeriod>;
  setOpeningHoursPeriods!: Sequelize.HasManySetAssociationsMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  addOpeningHoursPeriod!: Sequelize.HasManyAddAssociationMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  addOpeningHoursPeriods!: Sequelize.HasManyAddAssociationsMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  createOpeningHoursPeriod!: Sequelize.HasManyCreateAssociationMixin<OpeningHoursPeriod>;
  removeOpeningHoursPeriod!: Sequelize.HasManyRemoveAssociationMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  removeOpeningHoursPeriods!: Sequelize.HasManyRemoveAssociationsMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  hasOpeningHoursPeriod!: Sequelize.HasManyHasAssociationMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  hasOpeningHoursPeriods!: Sequelize.HasManyHasAssociationsMixin<OpeningHoursPeriod, OpeningHoursPeriodId>;
  countOpeningHoursPeriods!: Sequelize.HasManyCountAssociationsMixin;
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
    logo_path: {
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
