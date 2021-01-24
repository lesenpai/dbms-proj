import React from 'react';
import { Create, ImageField, ImageInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';
import AvatarField from './AvatarField';

export const UserCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <AvatarField size='128' />
            <ImageInput source='new_photo' accept='image/*'>
                <ImageField source='image_path' />
            </ImageInput>
            
            {/* <TextInput source='id' disabled autoFocus /> */}
            <TextInput source='login' />
            <TextInput source='password' />
            <TextInput source='surname' />
            <TextInput source='name' />
            <TextInput source='patronym' />
            <TextInput source='dob' />
            <TextInput source='phone' />
            <TextInput source='email' />
            <TextInput source='image_path' />
            <TextInput source='role_id' />

            <ReferenceInput source='role_id' reference='Role'>
                <SelectInput optionText='name' />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);
