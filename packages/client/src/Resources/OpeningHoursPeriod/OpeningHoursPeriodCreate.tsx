import React from 'react';
import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import { StatusList } from '../../components/StatusField';
import { WeekDayList } from '../../components/WeekDayField';

export const OpeningHoursPeriodCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled autoFocus /> */}
            <SelectInput source='first_day_id' choices={WeekDayList} />
            <SelectInput source='last_day_id' choices={WeekDayList} />
            <TextInput source="end_time" />
            <SelectInput source='status' choices={StatusList} />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="full_name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
