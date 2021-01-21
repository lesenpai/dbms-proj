import { Company2ItemList } from './Company2ItemList';
import { Company2ItemCreate } from './Company2ItemCreate';
import { Company2ItemEdit } from './Company2ItemEdit';

import icon from '@material-ui/icons/FiberManualRecord';
import { UserRole } from '../../types';
export const Company2ItemIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN, UserRole.AGENT],
    edit: [UserRole.ADMIN, UserRole.AGENT],
    fields: [UserRole.ADMIN],
};

export const company2itemResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? Company2ItemList : null,
    create: [...allowedRoles.create].includes(permissions) ? Company2ItemCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? Company2ItemEdit : null,

    icon,
    name: 'Company2Item',
});
