import React from 'react';
import { Create, SimpleForm, TextInput } from 'react-admin';

export const ActivityCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);
