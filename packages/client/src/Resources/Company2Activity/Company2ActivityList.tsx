import React, { FC } from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField, Filter, FilterProps, TextInput, ReferenceInput, SelectInput } from 'react-admin';
import AvatarField from '../User/AvatarField';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />

        <ReferenceInput source='activity_id' reference='Activity' sort={{ field: 'id', order: 'asc' }}>
            <SelectInput optionText='name' />
        </ReferenceInput>

        <ReferenceInput source='company_id' reference='Company' sort={{ field: 'id', order: 'asc' }}>
            <SelectInput optionText='full_name' />
        </ReferenceInput>
    </Filter>
);

export const Company2ActivityList = (props) => {
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
                <ReferenceField source='company_id' reference='Company' label=''>
                    <AvatarField size='64' source='image_path' />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <ReferenceField source='activity_id' reference='Activity'>
                    <TextField source='name' />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
};
