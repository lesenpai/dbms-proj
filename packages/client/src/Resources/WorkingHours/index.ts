import { WorkingHoursList } from './WorkingHoursList';
import { WorkingHoursCreate } from './WorkingHoursCreate';
import { WorkingHoursEdit } from './WorkingHoursEdit';

import icon from '@material-ui/icons/AccessTime';
import { UserRole } from '../../types';
export const WorkingHoursIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const workinghoursResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? WorkingHoursList : null,
    create: [...allowedRoles.create].includes(permissions) ? WorkingHoursCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? WorkingHoursEdit : null,

    icon: WorkingHoursIcon,
    name: 'WorkingHours',
});
