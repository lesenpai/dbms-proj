import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageInput, ImageField } from 'react-admin';
import AvatarField from './AvatarField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <AvatarField size="128" />
            <ImageInput source="new_photo" accept="image/*">
                <ImageField source="photo_path" />
            </ImageInput>

            <TextInput source="id" disabled />
            <TextInput source="login" />
            <TextInput source="password" />
            <TextInput source="surname" />
            <TextInput source="name" />
            <TextInput source="patronym" />
            <TextInput source="dob" />
            <TextInput source="phone" />
            <TextInput source="email" />
            <TextInput source="photo_path" />
            {/* <TextInput source="role_id" /> */}

            <ReferenceInput source="role_id" reference="Role">
                <SelectInput optionText="name" />
            </ReferenceInput>

            {/* <ImageField source="photo_path" /> */}


        </SimpleForm>
    </Edit>
);
