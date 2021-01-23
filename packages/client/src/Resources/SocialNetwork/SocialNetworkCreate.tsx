import React from 'react';
import { Create, ImageField, ImageInput, SimpleForm, TextInput } from 'react-admin';

export const SocialNetworkCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>
            <TextInput source='id' disabled autoFocus />
            <TextInput source='name' />
            {/* <TextInput source="image_path" /> */}
        </SimpleForm>
    </Create>
);
