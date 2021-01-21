import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const OpeningHoursPeriodCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="first_day_id" />
            <TextInput source="last_day_id" />
            <TextInput source="start_time" />
            <TextInput source="end_time" />
            <TextInput source="status" />
            <TextInput source="company_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
