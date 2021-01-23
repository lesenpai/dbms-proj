import { ArticleList } from './ArticleList';
import { ArticleCreate } from './ArticleCreate';
import { ArticleEdit } from './ArticleEdit';

import icon from '@material-ui/icons/Description';
import { UserRole } from '../../types';
export const ArticleIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT, UserRole.VISITOR],
    create: [UserRole.ADMIN, UserRole.AGENT],
    edit: [UserRole.ADMIN, UserRole.AGENT],
    fields: [UserRole.ADMIN],
};

export const articleResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? ArticleList : null,
    create: [...allowedRoles.create].includes(permissions) ? ArticleCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? ArticleEdit : null,

    icon: ArticleIcon,
    name: 'Article',
});
