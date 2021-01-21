import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField } from 'react-admin';
import StatusField from '../../components/StatusField';
import WeekDayField from '../../components/WeekDayField';
import { ContentStatus } from '../../types';

export const OpeningHoursPeriodList = (props) => {
    return (
        <List exporter={false} perPage={25} bulkActionButtons={false} {...props}>
            <Datagrid optimized rowClick="edit">
                <TextField source="id" />
                <WeekDayField source="first_day_id" />
                <WeekDayField source="last_day_id" />
                <TextField source="start_time" />
                <TextField source="end_time" />
                <StatusField/>
                {/* <TextField source="company_id" /> */}

                <ReferenceField source="company_id" reference="Company">
                    <TextField source="full_name" />
                </ReferenceField>

                <EditButton />
            </Datagrid>
        </List>
    );
};
