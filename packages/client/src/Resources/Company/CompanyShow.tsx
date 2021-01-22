import { Typography } from '@material-ui/core';
import React from 'react';
import { EditButton, TopToolbar, Show, SimpleShowLayout, TextField, ImageField, RichTextField, Datagrid, ReferenceManyField } from 'react-admin';
import CompanyAddressField from './AddressField';

const PostShowActions = ({ basePath, data, resource }: any) => (
    <TopToolbar>
        <EditButton basePath={basePath} record={data} />
        {/* Add your custom actions */}
        {/* <Button color="primary" onClick={customAction}>Custom Action</Button> */}
    </TopToolbar>
);

const Aside = ({ record }: any) => (
    <div style={{ width: 200, margin: '1em' }}>
        <Typography variant='h6'>Stud info</Typography>
        <Typography variant='body2'>Kekeke</Typography>

        {record && <Typography variant='body2'>Name: {record.user.name}</Typography>}
    </div>
);

export const CompanyShow = (props) => (
    <>
        <Show
            {...props}
            actions={<PostShowActions />}
            /* aside={<Aside />} */
        >
            <SimpleShowLayout>
                <ImageField source='image_path' />
                <TextField source='full_name' />
                <TextField source='short_name' />
                <RichTextField source='description' />
                <CompanyAddressField />
            </SimpleShowLayout>
        </Show>
    </>
);
