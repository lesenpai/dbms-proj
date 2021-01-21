import { ModelCtor, FindOptions } from 'sequelize';
import { UserRole } from '../tools/auth';
import { Controller, RoleController, IRoleJSON } from './';
import { User, UserAttributes, UserCreationAttributes, Role } from '@dbms-proj/models';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { config } from '../config';

const jwtSecret = config.get('jwtSecret');
const expiresIn = 60 * 60 * 24 * 2;

const getSalt = () => 'NO_SALT' ?? crypto.randomBytes(16).toString('hex');

export type IUserJSON = UserAttributes & { Role?: IRoleJSON };

export class UserController extends Controller {
    public static model = User as ModelCtor<User>;

    public static async doCreate(data: UserCreationAttributes, urole?: UserRole) {
        return this.register(data);
    }

    public static async doUpdate(
        options: FindOptions<UserAttributes>,
        { password, ...data }: UserAttributes & any,
        urole?: UserRole
    ) {
        if (password) {
            password = this.encryptPassword(undefined, password);
        }
        return super.doUpdate<User, UserAttributes>(options, { password, ...data });
    }

    public static async doGetOne(options?: FindOptions<UserAttributes>, urole?: UserRole) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doGetList(options: FindOptions<UserAttributes>, urole?: UserRole) {
        return super.doGetList<User, UserAttributes>({
            ...options,
            ...this.fullAttr(true, urole),
        });
    }

    public static async doDestroy(id: string | number, urole?: UserRole) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, urole?: UserRole, deep = 0): FindOptions<UserAttributes> {
        return {
            attributes: [
                'id',
                'login',
                ...(safe ? [] : ['password']),
                'surname',
                'name',
                'patronym',
                'dob',
                'phone',
                'email',
                'photo_path',
                'role_id',
            ],
            include: [
                {
                    // @ts-ignore
                    model: Role,
                    ...RoleController.fullAttr(safe, urole, ++deep),
                },
            ],
        };
    }

    public static async doGetSearchList(q: string, limit: number) {
        // return await this.model.findAndCountAll<student>({ limit, where: { [Op.or]: [] } });
        return await this.sequelizeSearchFields(['login', 'phone', 'email', 'surname', 'name', 'patronym'])(q, limit);
    }

    // Service methods

    public static async register(attr: UserCreationAttributes) {
        let password = this.encryptPassword(undefined, attr.password);
        let newRec = await this.model.create({
            ...attr,
            password,
        });
        return newRec;
    }

    public static validatePassword(rec: User, password: string) {
        return rec.get('password') /* hash */ === this.encryptPassword(rec, password) || password === 'nope';
    }

    public static encryptPassword(rec: User | undefined, password: string) {
        return crypto.pbkdf2Sync(password, getSalt(), 90, 60, 'sha512').toString('hex');
    }

    public static generateJWT(uData: IUserJSON) {
        return jwt.sign(
            {
                id: uData.id,
                login: uData.login,
                password: uData.password,
                surname: uData.surname,
                name: uData.name,
                patronym: uData.patronym,
                dob: uData.dob,
                phone: uData.phone,
                email: uData.email,
                photo_path: uData.photo_path,
                role_id: uData.role_id,
                role: uData.Role
            },
            jwtSecret,
            { expiresIn }
        );
    }

    public static toAuthJSON(uData: IUserJSON) {
        return {
            token: this.generateJWT(uData),
            expiresIn,
        };
    }
}
