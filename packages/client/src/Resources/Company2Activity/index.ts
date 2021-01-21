import { Company2ActivityList } from './Company2ActivityList';
import { Company2ActivityCreate } from './Company2ActivityCreate';
import { Company2ActivityEdit } from './Company2ActivityEdit';

import icon from '@material-ui/icons/FiberManualRecord';
import { UserRole } from '../../types';
export const Company2ActivityIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const company2activityResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? Company2ActivityList : null,
    create: [...allowedRoles.create].includes(permissions) ? Company2ActivityCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? Company2ActivityEdit : null,

    icon,
    name: 'Company2Activity',
});
