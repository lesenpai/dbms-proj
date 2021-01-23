import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    ReferenceField,
    RichTextField,
    ImageField,
    TopToolbar,
    CreateButton,
    ExportButton,
    FilterProps,
    Filter,
    TextInput,
    ReferenceInput,
    SelectInput,
    useTranslate,
} from 'react-admin';
import { allowedRoles } from '.';
import CheckRole from '../../components/CheckRole';
import StatusField from '../../components/StatusField';
import { getUserRole } from '../../modules/UserModule';
import AvatarField from '../User/AvatarField';
// import { ImportButton } from 'react-admin-import-csv';

const dataRowClick = (id, basePath, record) => {
    console.log('editRecord', id, basePath, record);
    return 'edit'; // record.editable ? 'edit' : 'show';
};

const Empty = ({ basePath = '', resource = {} }) => {
    const translate = useTranslate();

    return (
        <Box textAlign="center" m={1}>
            <Typography variant="h4" paragraph>
                {/* TODO.. */}
                {translate('resources.mark.page.empty')}
            </Typography>
            {/* TODO.. */}
            <Typography variant="body1">{translate('resources.mark.page.invite')}</Typography>
            <CreateButton basePath={basePath} />
            {/* <Button onClick={...}>Import</Button> */}
        </Box>
    );
};

const Expand = (props) => <div dangerouslySetInnerHTML={{ __html: props.record.text }} />;

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />

        <ReferenceInput source='company_id' reference='Company' sort={{ field: 'full_name', order: 'asc' }}>
            <SelectInput optionText='full_name' />
        </ReferenceInput>
    </Filter>
);

//todo: добавить create
const ListActions = (props) => {
    const { className, basePath, total, resource, currentSort /* , exporter */ } = props;
    return (
        <TopToolbar className={className}>
            <MyFilter context='button' />
            <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} >
                <CreateButton basePath={basePath} />
            </CheckRole>
            <ExportButton
                disabled={total === 0}
                resource={resource}
                sort={currentSort}
                // exporter={exporter}
            />
            {/* <ImportButton {...props} /> */}
        </TopToolbar>
    );
};

const Aside = () => {
    return (
        <div style={{ width: 200, margin: '1em' }}>
            <Typography variant="h6">Статистика отметок</Typography>
            <Typography variant="body2">
                Помещаемость: ...{/* ids.map((id) => data[id]).reduce((sum, post) => sum + post.views, 0) */}
            </Typography>
        </div>
    );
};

export const ArticleList = (props) => {
    return (
        <List
            {...props}
            // exporter={exporter}
            // aside={<Aside />}
            empty={<Empty />}
            sort={{ field: 'id', order: 'DESC' }}
            bulkActionButtons={false}
            actions={<ListActions />}
            filters={<MyFilter context='button' />}
        >
            <Datagrid optimized rowClick='edit' expand={<Expand />}>
                {/* <TextField source='id' /> */}
                {/* @ts-ignore */}
                <AvatarField size='128' source='image_path' />
                <TextField source='title' />

                <ReferenceField source='company_id' reference='Company' link='show'>
                    <TextField source='full_name' />
                </ReferenceField>

                <TextField source='date' />
                <StatusField />
                {/* <CheckRole permissions={props.permissions} allowed={allowedRoles.edit} deny={<EditButton disabled />}>
                    <EditButton />
                </CheckRole> */}
                <CheckRole permissions={getUserRole()} allowed={allowedRoles.edit}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
