import FullNameField from './FullNameField';
import React, { FC, useCallback, useEffect, useState } from 'react';
import TextFieldEmpty from '../../components/TextFieldEmpty';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    useVersion,
    useDataProvider,
    Filter,
    FilterProps,
    TextInput,
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';
import CheckRole from '../../components/CheckRole';
import { allowedRoles } from '.';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
    </Filter>
);

export const UserList = (props) => {
    return (
        <List {...props} exporter={false} perPage={25} bulkActionButtons={false} filters={<MyFilter context='button' />}>
            <Datagrid optimized rowClick='edit'>
                {/* <TextField source='id' /> */}
                <FullNameField label='ФИО' />
                <TextField source='login' />
                <TextField source='dob' />
                <TextField source='phone' />
                <TextField source='email' />

                <ReferenceField source='role_id' reference='Role'>
                    <TextField source='name' />
                </ReferenceField>
                <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} deny={<EditButton disabled />}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
