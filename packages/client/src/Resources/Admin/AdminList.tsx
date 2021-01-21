import React, { FC } from 'react';
import TextFieldEmpty from '../../components/TextFieldEmpty';
import FullNameField from '../User/FullNameField';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    useTranslate,
    translate,
    ReferenceManyField,
    Button,
    Link,
    TopToolbar,
    CreateButton,
    ExportButton,
    Filter,
    ReferenceInput,
    SelectInput,
    TextInput,
    FilterProps,
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
    </Filter>
);

export const AdminList = (props) => {
    return (
        <List {...props} exporter={false} perPage={25} bulkActionButtons={false}>
            <Datagrid optimized rowClick='edit'>
                <TextFieldEmpty source='id' />
                <ReferenceField source='user_id' reference='User'>
                    <FullNameField />
                </ReferenceField>
                <TextFieldEmpty source='passport_ser' />
                <TextFieldEmpty source='passport_id' />
                <TextFieldEmpty source='country' />
                <TextFieldEmpty source='city' />
                <TextFieldEmpty source='street' />
                <TextFieldEmpty source='building' />
                <TextFieldEmpty source='flat' />
                <EditButton />
            </Datagrid>
        </List>
    );
};
