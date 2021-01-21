import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const Company2ActivityCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="company_id" />
            <TextInput source="activity_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <ReferenceInput source="activity_id" reference="Activity">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
