import React, { FC } from 'react';
import { ShowButton, useListContext } from 'react-admin';
import { Card, CardActions, CardContent, CardHeader, Avatar } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import AvatarField from '../User/AvatarField';
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


const cardStyle = {
    width: 300,
    minHeight: 300,
    margin: '0.5em',
    display: 'inline-block',
    verticalAlign: 'top'
};

const CompanyGrid = (props) => {
    const { ids, data, basePath } = useListContext();
    return (
        <div style={{ margin: '1em' }}>
            {ids.map((id) => (
                <Card key={id} style={cardStyle}>
                    <CardHeader
                        title={<TextField record={data[id]} source='short_name' />}
                        subheader={<TextField record={data[id]} source='full_name' />}
                        // avatar={<Avatar icon={<PersonIcon />} />}
                    />
                    {/* <CardContent>
                        <ImageField record={data[id]} source='logo_path' />
                    </CardContent> */}

                    <CardContent>
                        {/* @ts-ignore */}
                        <AvatarField size='128' record={data[id]} source='logo_path' />
                        {/* <ImageField record={data[id]} source='logo_path' /> */}
                    </CardContent>

                    <CardContent>
                        <TextField record={data[id]} source='description' />
                    </CardContent>
                    <CardContent>
                        {/* about&nbsp; */}
                        <ReferenceField
                            label='Post'
                            resource='comments'
                            record={data[id]}
                            source='post_id'
                            reference='posts'
                            basePath={basePath}
                        >
                            <TextField source='title' />
                        </ReferenceField>
                    </CardContent>
                    <CardActions style={{ textAlign: 'right' }}>
                        <CheckRole
                            permissions={props.permissions}
                            allowed={allowedRoles.edit}
                            deny={<EditButton disabled />}
                        >
                            <EditButton resource='Company' basePath={basePath} record={data[id]} />
                        </CheckRole>

                        <ShowButton resource='Company' basePath={basePath} record={data[id]} />
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

/* const Expand = (props) => (
    <Show {...props} >
        <SimpleShowLayout>
            <RichTextField source="description" label="Описание"/>
        </SimpleShowLayout>
    </Show>
    // <div dangerouslySetInnerHTML={{__html:props.record.description}}/>
) */

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
    </Filter>
);

export const CompanyList = (props) => {
    return (
        <List
            {...props}
            exporter={false}
            perPage={25}
            sort={{ field: 'full_name', order: 'desc' }}
            filters={<MyFilter context='button' />}
            bulkActionButtons={false}
        >
            <CompanyGrid />
        </List>
    );
};
