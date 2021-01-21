import type { Sequelize, Model } from "sequelize";
import { Activity } from "./Activity";
import type { ActivityAttributes, ActivityCreationAttributes } from "./Activity";
import { Admin } from "./Admin";
import type { AdminAttributes, AdminCreationAttributes } from "./Admin";
import { Agent } from "./Agent";
import type { AgentAttributes, AgentCreationAttributes } from "./Agent";
import { Agent_Password_Changelog } from "./Agent_Password_Changelog";
import type { Agent_Password_ChangelogAttributes, Agent_Password_ChangelogCreationAttributes } from "./Agent_Password_Changelog";
import { Article } from "./Article";
import type { ArticleAttributes, ArticleCreationAttributes } from "./Article";
import { Company } from "./Company";
import type { CompanyAttributes, CompanyCreationAttributes } from "./Company";
import { Company2Activity } from "./Company2Activity";
import type { Company2ActivityAttributes, Company2ActivityCreationAttributes } from "./Company2Activity";
import { Company2Item } from "./Company2Item";
import type { Company2ItemAttributes, Company2ItemCreationAttributes } from "./Company2Item";
import { Email } from "./Email";
import type { EmailAttributes, EmailCreationAttributes } from "./Email";
import { Item } from "./Item";
import type { ItemAttributes, ItemCreationAttributes } from "./Item";
import { ItemCategory } from "./ItemCategory";
import type { ItemCategoryAttributes, ItemCategoryCreationAttributes } from "./ItemCategory";
import { ItemType } from "./ItemType";
import type { ItemTypeAttributes, ItemTypeCreationAttributes } from "./ItemType";
import { OpeningHoursPeriod } from "./OpeningHoursPeriod";
import type { OpeningHoursPeriodAttributes, OpeningHoursPeriodCreationAttributes } from "./OpeningHoursPeriod";
import { Phone } from "./Phone";
import type { PhoneAttributes, PhoneCreationAttributes } from "./Phone";
import { Role } from "./Role";
import type { RoleAttributes, RoleCreationAttributes } from "./Role";
import { User } from "./User";
import type { UserAttributes, UserCreationAttributes } from "./User";

export {
  Activity,
  Admin,
  Agent,
  Agent_Password_Changelog,
  Article,
  Company,
  Company2Activity,
  Company2Item,
  Email,
  Item,
  ItemCategory,
  ItemType,
  OpeningHoursPeriod,
  Phone,
  Role,
  User,
};

export type {
  ActivityAttributes,
  ActivityCreationAttributes,
  AdminAttributes,
  AdminCreationAttributes,
  AgentAttributes,
  AgentCreationAttributes,
  Agent_Password_ChangelogAttributes,
  Agent_Password_ChangelogCreationAttributes,
  ArticleAttributes,
  ArticleCreationAttributes,
  CompanyAttributes,
  CompanyCreationAttributes,
  Company2ActivityAttributes,
  Company2ActivityCreationAttributes,
  Company2ItemAttributes,
  Company2ItemCreationAttributes,
  EmailAttributes,
  EmailCreationAttributes,
  ItemAttributes,
  ItemCreationAttributes,
  ItemCategoryAttributes,
  ItemCategoryCreationAttributes,
  ItemTypeAttributes,
  ItemTypeCreationAttributes,
  OpeningHoursPeriodAttributes,
  OpeningHoursPeriodCreationAttributes,
  PhoneAttributes,
  PhoneCreationAttributes,
  RoleAttributes,
  RoleCreationAttributes,
  UserAttributes,
  UserCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  Activity.initModel(sequelize);
  Admin.initModel(sequelize);
  Agent.initModel(sequelize);
  Agent_Password_Changelog.initModel(sequelize);
  Article.initModel(sequelize);
  Company.initModel(sequelize);
  Company2Activity.initModel(sequelize);
  Company2Item.initModel(sequelize);
  Email.initModel(sequelize);
  Item.initModel(sequelize);
  ItemCategory.initModel(sequelize);
  ItemType.initModel(sequelize);
  OpeningHoursPeriod.initModel(sequelize);
  Phone.initModel(sequelize);
  Role.initModel(sequelize);
  User.initModel(sequelize);

  Admin.belongsTo(User, { foreignKey: "user_id"});
  User.hasMany(Admin, { foreignKey: "user_id"});
  Agent.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Agent, { foreignKey: "company_id"});
  Agent.belongsTo(User, { foreignKey: "user_id"});
  User.hasMany(Agent, { foreignKey: "user_id"});
  Article.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Article, { foreignKey: "company_id"});
  Company2Activity.belongsTo(Activity, { foreignKey: "activity_id"});
  Activity.hasMany(Company2Activity, { foreignKey: "activity_id"});
  Company2Activity.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Company2Activity, { foreignKey: "company_id"});
  Company2Item.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Company2Item, { foreignKey: "company_id"});
  Company2Item.belongsTo(Item, { foreignKey: "item_id"});
  Item.hasMany(Company2Item, { foreignKey: "item_id"});
  Email.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Email, { foreignKey: "company_id"});
  Item.belongsTo(ItemCategory, { foreignKey: "category_id"});
  ItemCategory.hasMany(Item, { foreignKey: "category_id"});
  Item.belongsTo(ItemType, { foreignKey: "item_type_id"});
  ItemType.hasMany(Item, { foreignKey: "item_type_id"});
  ItemCategory.belongsTo(ItemCategory, { foreignKey: "parent_category_id"});
  ItemCategory.hasMany(ItemCategory, { foreignKey: "parent_category_id"});
  OpeningHoursPeriod.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(OpeningHoursPeriod, { foreignKey: "company_id"});
  Phone.belongsTo(Company, { foreignKey: "company_id"});
  Company.hasMany(Phone, { foreignKey: "company_id"});
  User.belongsTo(Role, { foreignKey: "role_id"});
  Role.hasMany(User, { foreignKey: "role_id"});

  return {
    Activity: Activity,
    Admin: Admin,
    Agent: Agent,
    Agent_Password_Changelog: Agent_Password_Changelog,
    Article: Article,
    Company: Company,
    Company2Activity: Company2Activity,
    Company2Item: Company2Item,
    Email: Email,
    Item: Item,
    ItemCategory: ItemCategory,
    ItemType: ItemType,
    OpeningHoursPeriod: OpeningHoursPeriod,
    Phone: Phone,
    Role: Role,
    User: User,
  };
}
