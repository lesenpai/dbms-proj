import { ItemList } from './ItemList';
import { ItemCreate } from './ItemCreate';
import { ItemEdit } from './ItemEdit';

import icon from '@material-ui/icons/Store';
import { UserRole } from '../../types';
export const ItemIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN, UserRole.AGENT],
    edit: [UserRole.ADMIN, UserRole.AGENT],
    fields: [UserRole.ADMIN],
};

export const itemResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ItemList : null,
    create: [...allowedRoles.create].includes(permissions) ? ItemCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ItemEdit : null,

    icon: ItemIcon,
    name: 'Item',
});
