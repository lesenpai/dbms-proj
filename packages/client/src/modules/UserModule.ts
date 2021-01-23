import decodeJwt from 'jwt-decode';
import store from '../store';
import { roleAttributes, IUserModel, UserRole } from '../types';

export function getUserRole(): UserRole {
    return store.getState().UserModule?.role_id;
}

// User class
export class User implements IUserModel {
    public id: number;
    public image_path?: string;
    public login: string;
    public name: string;
    public patronym: string;
    public surname?: string;

    // public personal_address: string;
    public phone: string;
    public dob: string;
    // public registeration_date: string;
    public role_id: number;

    public role?: roleAttributes;
    public token: string;
    public expiresIn: number;

    constructor(data: IUserModel) {
        let token = data.token || getToken();

        this.token = token;
        this.expiresIn = Date.now() + (data.expiresIn||6e9) * 1e3;
        try {
            data = decodeJwt(token || '');
            // TODO: calculate from (iat & exp)
            // data.expiresIn = 6e9;
            console.log('decoded Token data', data);
        } catch (e) {}

        this.id = data.id;
        this.image_path = data.image_path;
        this.login = data.login;
        this.name = data.name;
        this.patronym = data.patronym;
        this.surname = data?.surname;

        this.phone = data.phone;
        this.dob = data.dob;
        this.role_id = data.role_id;
        //@ts-ignore
        this.role = data?.role;
    }

    public get fullName() {
        return ['surname', 'name', 'patronym'].map((e) => this[e]).join(' ')+` (${this.role?.name})`;
    }

    public get avatar() {
        return this.image_path ?? 'qeq';
    }

    public get soGood() {
        return !!this.token && this.checkExpiries;
    }

    public get checkExpiries() {
        return this.expiresIn > Date.now();
    }

    public static empty() {
        return new User({
            id: 9,
            login: 'login',
            patronym: 'LastName',
            name: 'Name',
            dob: '2000-06-06',
            phone: '',
            image_path: null,
            role_id: 1,
        });
    }
}

const initialState = User.empty();

// const SET_USER = 'UserModule.SET_USER';
const RESET_USER = 'UserModule.RESET_USER';
const INIT_USER = 'UserModule.INIT_USER';

const UserModule = (state: User = initialState, action): User => {
    switch (action.type) {
        case INIT_USER:
            return action.user;

        case RESET_USER:
            return initialState;

        default:
            return state;
    }
};

export function initUser(user) {
    return { type: INIT_USER, user };
}

export function resetUser() {
    return { type: RESET_USER };
}

export function setToken(e: string) {
    localStorage.setItem('x-token', e);
}

export function getToken() {
    return localStorage.getItem('x-token');
}

export function removeToken() {
    return localStorage.removeItem('x-token');
}

export function getUser(): User {
    return store.getState().UserModule;
}

/* export const userRoles = Object.values(UserRole)
    .filter((e) => typeof UserRole[e] === 'number')
    .map((name) => ({
        id: UserRole[name],
        code: name,
        name: `resources.roles.data.${name}`,
    })); */

export default UserModule;
