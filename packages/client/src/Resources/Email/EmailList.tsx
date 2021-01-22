import StatusField from '../../components/StatusField';
import TextFieldEmpty from '../../components/TextFieldEmpty';
import React, { FC, useCallback, useEffect, useState } from 'react';
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
    ReferenceInput,
    SelectInput,
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';
import AvatarField from '../User/AvatarField';


const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />

        <ReferenceInput source='company_id' reference='Company' sort={{ field: 'id', order: 'asc' }}>
            <SelectInput optionText='full_name' />
        </ReferenceInput>
    </Filter>
);

export const EmailList = (props) => {
    return (
        <List
            exporter={false}
            bulkActionButtons={false}
            perPage={25}
            filters={<MyFilter context='button' />}
            {...props}
        >
            <Datagrid optimized rowClick='edit'>
                {/* <TextField source='id' /> */}

                <ReferenceField source='company_id' reference='Company'>
                    <AvatarField size='64' source='image_path' />
                </ReferenceField>
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <TextField source='addr' />

                <TextFieldEmpty source='description' />
                <StatusField />

                <EditButton />
            </Datagrid>
        </List>
    );
};
