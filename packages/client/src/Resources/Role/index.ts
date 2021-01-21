import { RoleList } from './RoleList';
import { RoleCreate } from './RoleCreate';
import { RoleEdit } from './RoleEdit';

import icon from '@material-ui/icons/FiberManualRecord';
import { UserRole } from '../../types';
export const RoleIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const roleResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? RoleList : null,
    create: [...allowedRoles.create].includes(permissions) ? RoleCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? RoleEdit : null,

    icon,
    name: 'Role',
});
