import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const EmailEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="addr" />
            <TextInput source="description" />
            <TextInput source="status" />
            <TextInput source="company_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
