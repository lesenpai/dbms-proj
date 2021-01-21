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
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
    </Filter>
);

export const PhoneList = (props) => {
    const translate = useTranslate();

    return (
        <List {...props} exporter={false} perPage={25} bulkActionButtons={false} filters={<MyFilter context='button' />}>
            <Datagrid optimized rowClick='edit'>
                <TextField source='id' />
                <TextField source='number' />
                <TextField source='description' />
                <StatusField />

                <ReferenceField
                    source='company_id'
                    reference='Company'
                    label={translate('resources.Company.name')}
                >
                    <TextField source='full_name' />
                </ReferenceField>

                <EditButton />
            </Datagrid>
        </List>
    );
};
