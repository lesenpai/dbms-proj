import { ActivityList } from './ActivityList';
import { ActivityCreate } from './ActivityCreate';
import { ActivityEdit } from './ActivityEdit';

import icon from '@material-ui/icons/ClearAll';
import { UserRole } from '../../types';
export const ActivityIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const activityResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ActivityList : null,
    create: [...allowedRoles.create].includes(permissions) ? ActivityCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ActivityEdit : null,

    icon,
    name: 'Activity',
});
