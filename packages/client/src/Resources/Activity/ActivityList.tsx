import React, { FC } from 'react';
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
import CheckRole from '../../components/CheckRole';
import { allowedRoles } from '.';

const Expand = (props) => (
    <ReferenceManyField {...props} reference='Company2Activity' target='activity_id'>
        <Datagrid>
            {/* {<TextField source='Company.full_name'></TextField>} */}
            <LinkToCompany />
        </Datagrid>
    </ReferenceManyField>
);

const LinkToCompany = ({ basePath, record }: any) => (
    <Button
        size='small'
        color='primary'
        component={Link}
        onClick={(event) => event.stopPropagation()}
        to={{
            pathname: `/Company/${record.company_id}/show`,
            /* search: stringify({
                page: 1,
                perPage: 25,
                // filter: JSON.stringify({ value: record.value }),
                filter: JSON.stringify({ parent_category_id: record.id }),
            }), */
        }}
    >
        <span>{record.Company.short_name}</span>
    </Button>
);

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
    </Filter>
);

export const ActivityList = (props) => {
    const translate = useTranslate();
    return (
        <List
            {...props}
            sort={{ field: 'id', order: 'DESC' }}
            exporter={false}
            perPage={25}
            bulkActionButtons={false}
            // actions={<ListActions />}
            filters={<MyFilter context='button' />}
        >
            <Datagrid optimized rowClick='edit' expand={<Expand />}>
                {/* <TextField source='id' /> */}
                <TextField source='name' /*  label={translate('resources.Activity.fields.full_name') }*/ />
                <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} deny={<EditButton disabled />}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
