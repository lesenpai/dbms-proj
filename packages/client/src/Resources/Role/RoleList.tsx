import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';
import { allowedRoles } from '.';
import CheckRole from '../../components/CheckRole';

export const RoleList = (props) => {
    return (
        <List exporter={false} perPage={25} bulkActionButtons={false} {...props}>
            <Datagrid optimized rowClick="edit">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
                <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} deny={<EditButton disabled />}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
