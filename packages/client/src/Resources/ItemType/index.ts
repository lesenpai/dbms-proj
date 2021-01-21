import { ItemTypeList } from './ItemTypeList';
import { ItemTypeCreate } from './ItemTypeCreate';
import { ItemTypeEdit } from './ItemTypeEdit';

import icon from '@material-ui/icons/FiberManualRecord';
import { UserRole } from '../../types';
import { userResource } from '../User';
export const ItemTypeIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const itemtypeResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ItemTypeList : null,
    create: [...allowedRoles.create].includes(permissions) ? ItemTypeCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ItemTypeEdit : null,

    icon,
    name: 'ItemType',
});
