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
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';


const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
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
                <TextField source='id' />
                <TextField source='addr' />
                <TextFieldEmpty source='description' />
                <StatusField />
                <ReferenceField source='company_id' reference='Company'>
                    <TextField source='full_name' />
                </ReferenceField>
                <EditButton />
            </Datagrid>
        </List>
    );
};
