import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, DateInput, ImageField, ImageInput } from 'react-admin';
import { StatusList } from '../../components/StatusField';
import RichTextInput from 'ra-input-rich-text';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const ArticleEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <ImageField source='image_path' />
            {/* <AvatarField size='128' source="logo_path"/> */}
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>
            
            <TextInput source='id' disabled />
            {/* <TextInput source="date" /> */}
            <DateInput source='date' />
            <TextInput source='title' />
            <RichTextInput source='text' />
            <SelectInput source='status' choices={StatusList} />
            <TextInput source='company_id' />

            <ReferenceInput source='company_id' reference='Company'>
                <SelectInput optionText='full_name' />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);
