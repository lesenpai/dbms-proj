import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';
import StatusField, { StatusList } from '../../components/StatusField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const EmailEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="addr" />
            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="full_name" />
            </ReferenceInput>
            <TextInput source="description" />
            <SelectInput source='status' choices={StatusList}/>

        </SimpleForm>
    </Edit>
);
