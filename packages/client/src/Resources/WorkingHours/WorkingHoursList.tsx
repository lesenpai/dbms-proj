import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';

export const WorkingHoursList = (props) => {
    return (
        <List exporter={false} perPage={25} {...props}>
            <Datagrid optimized rowClick="edit">
                <TextField source="id" />
                <TextField source="start_time" />
                <TextField source="end_time" />
                <TextField source="short_day_end_time" />
                <TextField source="company_id" />

                <ReferenceField source="company_id_id" reference="Company">
                    <TextField source="name" />
                </ReferenceField>

                <EditButton />
            </Datagrid>
        </List>
    );
};
