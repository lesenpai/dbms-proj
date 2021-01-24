import { OpeningHoursPeriodList } from './OpeningHoursPeriodList';
import { OpeningHoursPeriodCreate } from './OpeningHoursPeriodCreate';
import { OpeningHoursPeriodEdit } from './OpeningHoursPeriodEdit';

import icon from '@material-ui/icons/AccessTime';
import { UserRole } from '../../types';
export const OpeningHoursPeriodIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const openinghoursperiodResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? OpeningHoursPeriodList : null,
    create: [...allowedRoles.create].includes(permissions) ? OpeningHoursPeriodCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? OpeningHoursPeriodEdit : null,

    icon: OpeningHoursPeriodIcon,
    name: 'OpeningHoursPeriod',
});
