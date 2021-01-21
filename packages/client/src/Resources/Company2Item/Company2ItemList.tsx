import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';
import StatusField from '../../components/StatusField';
import TextFieldEmpty from '../../components/TextFieldEmpty';

export const Company2ItemList = (props) => {
    return (
        <List exporter={false} perPage={25} bulkActionButtons={false} {...props}>
            <Datagrid optimized rowClick='edit'>
                <TextField source='id' />
                <ReferenceField source='item_id' reference='Item'>
                    <TextField source='name' />
                </ReferenceField>
                <TextFieldEmpty source='price' />
                {/* <TextFieldEmpty source="description" /> */}
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <StatusField />
                <EditButton />
            </Datagrid>
        </List>
    );
};
