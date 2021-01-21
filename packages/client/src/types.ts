import { Record } from 'ra-core';
import { UserRole } from '@dbms-proj/utils/lib/UserRole';
import { User } from './modules/UserModule';
import { UserAttributes } from '@dbms-proj/models';
export { UserRole };

export type ThemeName = 'light' | 'dark';

export interface IThemeModule {
    theme: ThemeName;
}

export interface AppState {
    ThemeModule: IThemeModule;
    UserModule: User;
}

// Ordres
export enum EOrderStatus {
    None = 0,
    Wait,
    Done,
    Broke,
}

/* Records */

export interface roleAttributes extends Record {
    name: string;
    role: number;
}

export interface IUserModel extends Partial<UserAttributes> {
    id: number;
    token?: string;
    expiresIn?: number;
}

// Article, Item, etc.
export enum ContentStatus {
    MODERATION = 1,
    PUBLISHED = 2,
    DELETED = 3,
    DRAFT = 4
}

// Days of week
export enum WeekDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}