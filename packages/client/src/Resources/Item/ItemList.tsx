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
    ImageInput,
    ImageField,
    ReferenceInput,
    SelectInput,
} from 'react-admin';
import { stringify } from 'query-string';
import { ExpandLess } from '@material-ui/icons';
import AvatarField from '../User/AvatarField';
import CheckRole from '../../components/CheckRole';
import { getUserRole } from '../../modules/UserModule';
import { allowedRoles } from '../Admin';

const ItemCategoryPreloader = (props) => {
    const version = useVersion();
    const [state, setState] = useState<{ path: any }>({ path: 'Loading..' });

    const fetchClientReport = useCallback(async () => {
        const { data } = await props.dataProvider.getList('itemcategory/breadcrumbs', {
            filter: { cat_id: props.record.id },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 4 },
        });

        setState((state) => ({
            ...state,
            path: data[0]?.path,
        }));
    }, [props.dataProvider]);

    useEffect(() => {
        fetchClientReport();
    }, [version]);

    const { path } = state;
    return <span>{path}</span>;
};

const MyFilter: FC<Omit<FilterProps, 'children'>> = (props) => (
    <Filter {...props}>
        <TextInput label='Search' source='q' alwaysOn />
        <ReferenceInput source='category_id' reference='ItemCategory' sort={{ field: 'name', order: 'asc' }}>
            <SelectInput optionText='name' />
        </ReferenceInput>
    </Filter>
);

export const ItemList = (props) => {
    const dataProvider = useDataProvider();
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
                <TextField source='name' />

                <AvatarField size='128' source='image_path' />

                <TextFieldEmpty source='props' />
                <TextFieldEmpty source='description' />

                <ReferenceField source='category_id' reference='ItemCategory'>
                    {/* <TextField source='name' /> */}
                    <ItemCategoryPreloader dataProvider={dataProvider} />
                </ReferenceField>

                <ReferenceField source='item_type_id' reference='ItemType'>
                    <TextField source='name' />
                </ReferenceField>

                <CheckRole permissions={getUserRole()} allowed={allowedRoles.edit}>
                    <EditButton />
                </CheckRole>
            </Datagrid>
        </List>
    );
};
