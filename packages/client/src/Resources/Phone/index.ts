import { PhoneList } from './PhoneList';
import { PhoneCreate } from './PhoneCreate';
import { PhoneEdit } from './PhoneEdit';
import icon from '@material-ui/icons/Phone';
import { UserRole } from '../../types';
export const PhoneIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN, UserRole.AGENT],
    edit: [UserRole.ADMIN, UserRole.AGENT],
    fields: [UserRole.ADMIN],
};

export const phoneResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? PhoneList : null,
    create: [...allowedRoles.create].includes(permissions) ? PhoneCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? PhoneEdit : null,

    icon: PhoneIcon,
    name: 'Phone',
});
