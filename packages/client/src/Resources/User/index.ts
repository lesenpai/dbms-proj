import { UserList } from './UserList';
import { UserCreate } from './UserCreate';
import { UserEdit } from './UserEdit';

import icon from '@material-ui/icons/People';
import { UserRole } from '../../types';
export const UserIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const userResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? UserList : null,
    create: [...allowedRoles.create].includes(permissions) ? UserCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? UserEdit : null,

    icon: UserIcon,
    name: 'User',
});
