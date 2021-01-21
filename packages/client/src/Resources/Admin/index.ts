import { AdminList } from './AdminList';
import { AdminCreate } from './AdminCreate';
import { AdminEdit } from './AdminEdit';

import icon from '@material-ui/icons/People';
import { UserRole } from '../../types';
export const AdminIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const adminResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? AdminList : null,
    create: [...allowedRoles.create].includes(permissions) ? AdminCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? AdminEdit : null,

    icon: AdminIcon,
    name: 'Admin',
});
