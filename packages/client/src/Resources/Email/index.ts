import { EmailList } from './EmailList';
import { EmailCreate } from './EmailCreate';
import { EmailEdit } from './EmailEdit';

import icon from '@material-ui/icons/FiberManualRecord';
import { UserRole } from '../../types';
export const EmailIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN, UserRole.AGENT],
    edit: [UserRole.ADMIN, UserRole.AGENT],
    fields: [UserRole.ADMIN],
};

export const emailResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? EmailList : null,
    create: [...allowedRoles.create].includes(permissions) ? EmailCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? EmailEdit : null,

    icon,
    name: 'Email',
});
