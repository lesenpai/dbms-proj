import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageField, ImageInput } from 'react-admin';
import AvatarField from '../User/AvatarField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const SocialNetworkEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <ImageField source='image_path' />
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>

            <TextInput source='id' disabled />
            <TextInput source='name' />
            {/* <TextInput source='image_path' /> */}
        </SimpleForm>
    </Edit>
);
