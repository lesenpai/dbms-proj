import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const AgentEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="company_id" />
            <TextInput source="user_id" />

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
