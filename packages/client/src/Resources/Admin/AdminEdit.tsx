import { TextField } from '@material-ui/core';
import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';
import FullNameField, { FullName } from '../User/FullNameField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const AdminEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            <TextInput source="passport_ser" />
            <TextInput source="passport_id" />
            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="street" />
            <TextInput source="building" />
            <TextInput source="flat" />
            {/* <TextInput source="user_id" /> */}

            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText={FullName} />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
