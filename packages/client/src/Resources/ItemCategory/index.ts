import { ItemCategoryList } from './ItemCategoryList';
import { ItemCategoryCreate } from './ItemCategoryCreate';
import { ItemCategoryEdit } from './ItemCategoryEdit';

import icon from '@material-ui/icons/ClearAll';
import { UserRole } from '../../types';
export const ItemCategoryIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const itemcategoryResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ItemCategoryList : null,
    create: [...allowedRoles.create].includes(permissions) ? ItemCategoryCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ItemCategoryEdit : null,

    icon: ItemCategoryIcon,
    name: 'ItemCategory',
});
