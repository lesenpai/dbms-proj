import React from 'react';
import { Create, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import StatusField, { StatusList } from '../../components/StatusField';

export const PhoneCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='id' disabled autoFocus />
            <TextInput source='number' />
            <TextInput source='description' />
            <SelectInput source='status' choices={StatusList} />
            <ReferenceInput source='company_id' reference='Company'>
                <SelectInput optionText='full_name' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
