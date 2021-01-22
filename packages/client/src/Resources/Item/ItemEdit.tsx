import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageField, ImageInput } from 'react-admin';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const ItemEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props} undoable={false}>
        <SimpleForm>
            <ImageField source='image_path' />
            <TextInput source="id" disabled />
            <TextInput source="name" />
            
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>
            
            <TextInput source="props" />
            <TextInput source="description" />
            <TextInput source="category_id" />
            <TextInput source="item_type_id" />

            <ReferenceInput source="category_id" reference="ItemCategory">
                <SelectInput optionText="name" />
            </ReferenceInput>

            <ReferenceInput source="item_type_id" reference="ItemType">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
