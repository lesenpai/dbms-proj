import { SocialNetworkList } from './SocialNetworkList';
import { SocialNetworkCreate } from './SocialNetworkCreate';
import { SocialNetworkEdit } from './SocialNetworkEdit';

import icon from '@material-ui/icons/Message';
import { UserRole } from '../../types';
export const SocialNetworkIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const socialnetworkResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? SocialNetworkList : null,
    create: [...allowedRoles.create].includes(permissions) ? SocialNetworkCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? SocialNetworkEdit : null,

    icon: SocialNetworkIcon,
    name: 'SocialNetwork',
});
