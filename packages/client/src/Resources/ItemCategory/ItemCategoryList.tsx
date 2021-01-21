import React from 'react';
import { List, Datagrid, TextField, EditButton, ReferenceField, Button, ReferenceManyField } from 'react-admin';
import { Link } from 'react-admin';
import { stringify } from 'query-string';
import LinkToRelatedItems from '../../components/LinkToRelatedItems';

const Expand = (props) => (
    <ReferenceManyField {...props} reference='Item' target='category_id'>
        <Datagrid>{<TextField source='name' label="ТОВАР / УСЛУГА"></TextField>}</Datagrid>
    </ReferenceManyField>
);

const LinkToCategory = ({ basePath, record }: any) => (
    <Button
        size='small'
        color='primary'
        component={Link}
        onClick={(event) => event.stopPropagation()}
        to={{
            pathname: basePath,
            search: stringify({
                page: 1,
                perPage: 25,
                // filter: JSON.stringify({ value: record.value }),
                filter: JSON.stringify({ parent_category_id: record.id }),
            }),
        }}
    >
        <span>{record.name}</span>
    </Button>
);

export const ItemCategoryList = (props) => {
    return (
        <List
            exporter={false}
            perPage={25}
            {...props}
            //  filter={{parent_category_id: false}}
        >
            <Datagrid
                optimized
                // rowClick='edit'
                expand={<Expand />}
            >
                <TextField source='id' />
                <LinkToCategory />
                <EditButton />
            </Datagrid>
        </List>
    );
};
