import { AgentList } from './AgentList';
import { AgentCreate } from './AgentCreate';
import { AgentEdit } from './AgentEdit';

import icon from '@material-ui/icons/People';
import { UserRole } from '../../types';
export const AgentIcon = icon;

export const allowedRoles = {
    list: [UserRole.ADMIN, UserRole.AGENT],
    create: [UserRole.ADMIN],
    edit: [UserRole.ADMIN],
    fields: [UserRole.ADMIN],
};

export const agentResource = (permissions) => ({
    list: [...allowedRoles.list].includes(permissions) ? AgentList : null,
    create: [...allowedRoles.create].includes(permissions) ? AgentCreate : null,
    edit: [...allowedRoles.edit].includes(permissions) ? AgentEdit : null,

    icon: AgentIcon,
    name: 'Agent',
});
