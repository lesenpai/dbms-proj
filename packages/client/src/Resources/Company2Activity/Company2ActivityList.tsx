import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';

export const Company2ActivityList = (props) => {
    return (
        <List exporter={false} perPage={25} bulkActionButtons={false} {...props}>
            <Datagrid optimized rowClick='edit'>
                <TextField source='id' />
                <ReferenceField source='activity_id' reference='Activity'>
                    <TextField source='name' />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
};
