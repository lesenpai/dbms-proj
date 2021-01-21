import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const AgentCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="company_id" />
            <TextInput source="user_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
