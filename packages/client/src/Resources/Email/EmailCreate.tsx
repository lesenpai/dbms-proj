import React from 'react';
import { Create, ReferenceField, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput } from 'react-admin';
import { StatusList } from '../../components/StatusField';

export const EmailCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source='id' disabled autoFocus />
            <TextInput source='addr' />
            <TextInput source='description' />
            <SelectInput source='status' choices={StatusList} />

            <ReferenceInput source='company_id' reference='Company'>
                <SelectInput optionText='full_name' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
