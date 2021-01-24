import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';
import { StatusList } from '../../components/StatusField';
import { WeekDayList } from '../../components/WeekDayField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const OpeningHoursPeriodEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <SelectInput source='first_day_id' choices={WeekDayList} />
            <SelectInput source='last_day_id' choices={WeekDayList} />
            <TextInput source="end_time" />
            <SelectInput source='status' choices={StatusList} />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="full_name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
