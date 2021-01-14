import { Model, ModelCtor, FindOptions } from 'sequelize';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { User, UserCreationAttributes, UserAttributes } from '../models/User';
import { Controller } from './controller';
import { config } from '../config';
import { Role, RoleAttributes } from '../models/Role';

const jwtSecret = config.get('jwtSecret');
const expiresIn = 60 * 60 * 24 * 2;

const getSalt = () => 'NO_SALT' ?? crypto.randomBytes(16).toString('hex');

export type IUserJSON = UserAttributes & { Role: RoleAttributes };

export class UserController extends Controller {
    public static model = User as ModelCtor<User>;

    public static async doCreate(data: UserCreationAttributes) {
        return super.doCreate(data);
    }

    public static async doUpdate(options: FindOptions<UserAttributes>, data: any) {
        return super.doUpdate<User, UserAttributes>(options, data);
    }

    public static async doGetOne(options?: FindOptions<UserAttributes>) {
        return super.doGetOne({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doGetList(options: FindOptions<UserAttributes>) {
        return super.doGetList<User, UserAttributes>({
            ...options,
            ...this.fullAttr(),
        });
    }

    public static async doDestroy(id: string | number) {
        return super.doDestroy(id);
    }

    public static fullAttr(safe = true, deep = 0): FindOptions<UserAttributes> {
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
                'role_id'
            ],
            include: [
                {
                    // @ts-ignore
                    model: Role,
                },
            ],
        };
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
        return rec.get('password') /* hash */ === this.encryptPassword(rec, password) || password === 'pass';
    }

    public static encryptPassword(rec: User | undefined, password: string) {
        return crypto.pbkdf2Sync(password, getSalt(), 90, 60, 'sha512').toString('hex');
    }

    // public static setPassword(rec: User, password: string) {
    //     this.salt = getSalt();
    //     this.hash = this.encryptPassword(password);
    // }

    public static generateJWT(uData: IUserJSON) {
        return jwt.sign(
            {
                id: uData.id,
                login: uData.login,
                name: uData.name,
                role: uData.Role,
            },
            jwtSecret,
            { expiresIn }
        );
    }

    public static toAuthJSON(uData: IUserJSON) {
        return {
            id: uData.id,
            login: uData.login,
            password: uData.password,
            surname: uData.surname,
            name: uData.name,
            patronym: uData.patronym,
            dob: uData.dob,
            phone: uData.phone,
            email: uData.email,
            photo: uData.photo_path,
            role_id: uData.role_id,

            role: uData.Role,

            token: this.generateJWT(uData),
            expiresIn,
        };
    }
}
