import React from 'react';
import { Create, DateInput, ImageField, ImageInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import StatusField, { StatusList } from '../../components/StatusField';
import RichTextInput from 'ra-input-rich-text';

export const ArticleCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" disabled autoFocus /> */}
            <TextInput source="title" />
            <DateInput source="date" />
            {/* <TextInput source="image_path" /> */}
            
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>

            <RichTextInput source="text" />
            {/* <TextInput source="status" /> */}
            {/* <ReferenceInput source="status" reference="">
                <SelectInput optionText="full_name" />
            </ReferenceInput> */}
            {/* <TextInput source="company_id" /> */}
            {/* <SelectInput source='status' choices={StatusList}/> */}
            <ReferenceInput source="company_id" reference="Company">
                <SelectInput optionText="full_name" />
            </ReferenceInput>

        </SimpleForm>
    </Create>
);
