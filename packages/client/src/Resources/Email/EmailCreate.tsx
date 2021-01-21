import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
export const EmailCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="addr" />
            <TextInput source="description" />
            <TextInput source="status" />
            <TextInput source="company_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
