import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageField, ReferenceField } from 'react-admin';
import AvatarField from '../User/AvatarField';
import { FullName } from '../User/FullNameField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const AgentEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled /> */}
            {/* <TextInput source="company_id" /> */}
            {/* <TextInput source="user_id" /> */}
            <ReferenceField source='user_id' reference='User' label=''>
                <AvatarField size='128' source='image_path' />
            </ReferenceField>

            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="full_name" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="User">
                <ImageField source="image_path" />
            </ReferenceInput>

            <ReferenceInput source="user_id" reference="User">
                <SelectInput optionText={FullName} />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
