import { CompanyList } from './CompanyList';
import { CompanyCreate } from './CompanyCreate';
import { CompanyShow } from './CompanyShow';
import { CompanyEdit } from './CompanyEdit';
import icon from '@material-ui/icons/HomeWork';
import { UserRole } from '../../types';
export const CompanyIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
    show: [UserRole.ADMIN, UserRole.AGENT]
};

export const companyResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? CompanyList : null,
    create: [...allowedRoles.create].includes(permissions) ? CompanyCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? CompanyEdit : null,
    show: [...allowedRoles.show].includes(permissions) ? CompanyShow : null,
    icon: CompanyIcon,
    name: 'Company',
});
