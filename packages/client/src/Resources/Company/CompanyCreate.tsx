import React from 'react';
import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const CompanyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" disabled autoFocus />
            <TextInput source="full_name" />
            <TextInput source="short_name" />
            {/* <TextInput source="image_path" /> */}
            
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>

            <TextInput source="country" />
            <TextInput source="city" />
            <TextInput source="street" />
            <TextInput source="building" />
            <TextInput source="office" />
            <TextInput source="description" />
            <TextInput source="url" />
        </SimpleForm>
    </Create>
);
