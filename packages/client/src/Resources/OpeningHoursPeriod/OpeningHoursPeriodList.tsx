import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField, SelectInput } from 'react-admin';
import StatusField, { StatusList } from '../../components/StatusField';
import WeekDayField from '../../components/WeekDayField';

export const OpeningHoursPeriodList = (props) => {
    return (
        <List exporter={false} perPage={25} {...props} bulkActionButtons={false}>
            <Datagrid optimized rowClick="edit">
                <ReferenceField source="company_id" reference="Company">
                    <TextField source="full_name" />
                </ReferenceField>

                <WeekDayField source="first_day_id"/>
                <WeekDayField source="last_day_id"/>
                <TextField source="end_time" />

                <StatusField />

                <EditButton />
            </Datagrid>
        </List>
    );
};
