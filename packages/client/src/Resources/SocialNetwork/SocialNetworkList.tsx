import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField, ImageField } from 'react-admin';
import AvatarField from '../User/AvatarField';

export const SocialNetworkList = (props) => {
    return (
        <List exporter={false} perPage={25} {...props}>
            <Datagrid optimized rowClick="edit">
                <TextField source="id" />
                <TextField source="name" />
                <AvatarField size='128' source='image_path' />
                <EditButton />
            </Datagrid>
        </List>
    );
};
