import React, { FC } from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField, FilterProps, Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import CheckRole from '../../components/CheckRole';
import StatusField from '../../components/StatusField';
import TextFieldEmpty from '../../components/TextFieldEmpty';
import { getUserRole } from '../../modules/UserModule';
import { allowedRoles } from '../Admin';
import AvatarField from '../User/AvatarField';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />

        <ReferenceInput source='company_id' reference='Company' sort={{ field: 'full_name', order: 'asc' }}>
            <SelectInput optionText='full_name' />
        </ReferenceInput>

        <ReferenceInput source='item_id' reference='Item' sort={{ field: 'id', order: 'asc' }}>
            <SelectInput optionText='name' />
        </ReferenceInput>
    </Filter>
);

export const Company2ItemList = (props) => {
    return (
        <List
            exporter={false}
            perPage={25}
            bulkActionButtons={false}
            {...props}
            filters={<MyFilter context='button' />}
        >
            <Datagrid optimized rowClick='edit'>
                {/* <TextField source='id' /> */}
                <ReferenceField source='item_id' reference='Item' label=''>
                    <AvatarField size='64' source='image_path' />
                </ReferenceField>
                <ReferenceField source='item_id' reference='Item'>
                    <TextField source='name' />
                </ReferenceField>
                <TextFieldEmpty source='price'/>
                {/* <TextFieldEmpty source="description" /> */}
                <ReferenceField source='company_id' reference='Company' label=''>
                    <AvatarField size='64' source='image_path' />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <StatusField />
                <CheckRole permissions={getUserRole()} allowed={allowedRoles.edit}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
