import StatusField from '../../components/StatusField';
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
    useTranslate,
    ReferenceInput,
    SelectInput,
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';
import AvatarField from '../User/AvatarField';
import CheckRole from '../../components/CheckRole';
import { getUserRole } from '../../modules/UserModule';
import { allowedRoles } from '../Admin';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />

        <ReferenceInput source='company_id' reference='Company' sort={{ field: 'id', order: 'asc' }}>
            <SelectInput optionText='full_name' />
        </ReferenceInput>
    </Filter>
);

export const PhoneList = (props) => {
    const translate = useTranslate();

    return (
        <List
            {...props}
            exporter={false}
            perPage={25}
            bulkActionButtons={false}
            filters={<MyFilter context='button' />}
        >
            <Datagrid optimized rowClick='edit'>
                {/* <TextField source='id' /> */}
                <ReferenceField source='company_id' reference='Company' label=''>
                    <AvatarField size='64' source='image_path' />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company' label={translate('resources.Company.name')}>
                    <TextField source='full_name' />
                </ReferenceField>
                <TextField source='number' />
                <TextField source='description' />
                <StatusField />

                <CheckRole permissions={getUserRole()} allowed={allowedRoles.edit}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
