import Sequelize, { DataTypes, Model, Optional } from 'sequelize';
import type { Company, CompanyId } from './Company';

export interface ArticleAttributes {
  id: number;
  date: string;
  title: string;
  image_path?: string;
  text: string;
  company_id: number;
  status?: number;
}

export type ArticlePk = "id";
export type ArticleId = Article[ArticlePk];
export type ArticleCreationAttributes = Optional<ArticleAttributes, ArticlePk>;

export class Article extends Model<ArticleAttributes, ArticleCreationAttributes> implements ArticleAttributes {
  id!: number;
  date!: string;
  title!: string;
  image_path?: string;
  text!: string;
  company_id!: number;
  status?: number;

  // Article belongsTo Company
  Company!: Company;
  getCompany!: Sequelize.BelongsToGetAssociationMixin<Company>;
  setCompany!: Sequelize.BelongsToSetAssociationMixin<Company, CompanyId>;
  createCompany!: Sequelize.BelongsToCreateAssociationMixin<Company>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Article {
    Article.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    image_path: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    text: {
      type: DataTypes.STRING,
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
    status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'Article',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__Article__3213E83FB16F9A81",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  return Article;
  }
}
