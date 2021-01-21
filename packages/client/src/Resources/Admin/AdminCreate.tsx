import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const AdminCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="passport_ser" />
            <TextInput source="passport_id" />
            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="street" />
            <TextInput source="building" />
            <TextInput source="flat" />
            <TextInput source="user_id" />

            {/* <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput> */}

        </SimpleForm>
    </Create>
);
