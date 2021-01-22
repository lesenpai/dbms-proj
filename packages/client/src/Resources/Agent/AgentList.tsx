import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';
import { allowedRoles } from '.';
import CheckRole from '../../components/CheckRole';
import FullNameField from '../User/FullNameField';

export const AgentList = (props) => {
    return (
        <List {...props} exporter={false} perPage={25} bulkActionButtons={false}>
            <Datagrid optimized rowClick='edit'>
                {/* <TextField source='id' /> */}
                <ReferenceField source='user_id' reference='User'>
                    <FullNameField />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} deny={<EditButton disabled />}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
