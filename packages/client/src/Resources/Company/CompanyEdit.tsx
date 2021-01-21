import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageInput, ImageField, RichTextField } from 'react-admin';
import AvatarField from '../User/AvatarField';
import RichTextInput from 'ra-input-rich-text';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const CompanyEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <ImageField source='logo_path' />
            {/* <AvatarField size='128' source="logo_path"/> */}
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='logo_path' />
            </ImageInput>

            <TextInput source='id' disabled />
            <TextInput source='full_name' />
            <TextInput source='short_name' />
            <TextInput source='logo_path' />
            <TextInput source='country' />
            <TextInput source='city' />
            <TextInput source='street' />
            <TextInput source='building' />
            <TextInput source='office' />
            <RichTextInput source='description' />
            <TextInput source='url' />
        </SimpleForm>
    </Edit>
);
