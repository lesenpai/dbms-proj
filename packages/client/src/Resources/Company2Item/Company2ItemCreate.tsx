import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const Company2ItemCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled autoFocus /> */}
            <TextInput source="price" />
            <TextInput source="description" />
            <TextInput source="status" />
            <TextInput source="company_id" />
            <TextInput source="item_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <ReferenceInput source="item_id" reference="Item">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
