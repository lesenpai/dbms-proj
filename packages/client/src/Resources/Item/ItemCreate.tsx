import React, { useState } from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { Create, ImageField, ImageInput, ReferenceInput, SelectInput, SimpleForm, TextInput, useDataProvider, useVersion } from 'react-admin';

/* const ItemCategoryPreloader = (dataProvider) => (record) => {
    console.log('record', record);

    const version = useVersion();
    const [state, setState] = useState<{ path: any }>({ path: 'Loading..' });

    const fetchClientReport = useCallback(async () => {
        const { data } = await dataProvider.getList('itemcategory/breadcrumbs', {
            filter: { cat_id: record.id },
            sort: { field: 'date', order: 'DESC' },
            pagination: { page: 1, perPage: 4 },
        });

        setState((state) => ({
            ...state,
            path: data[0]?.path,
        }));
    }, [dataProvider]);

    useEffect(() => {
        fetchClientReport();
    }, [version]);

    const { path } = state;
    return path;
}; */

export const ItemCreate = (props) => {
    const dataProvider = useDataProvider();
    return (
        <Create {...props}>
            <SimpleForm>
                <TextInput source='id' disabled autoFocus />
                <TextInput source='name' />
                {/* <TextInput source='image_path' /> */}
                <ImageInput source='new_photo' accept='image/*'>
                    <ImageField source='image_path' />
                </ImageInput>
                <TextInput source='props' />
                <TextInput source='description' />
                <TextInput source='category_id' />
                <TextInput source='item_type_id' />

                <ReferenceInput source='category_id' reference='ItemCategory'>
                    {/* <SelectInput optionText={ItemCategoryPreloader(dataProvider)} /> */}
                    <SelectInput optionText='name' />
                </ReferenceInput>

                <ReferenceInput source='item_type_id' reference='ItemType'>
                    <SelectInput optionText='name' />
                </ReferenceInput>
            </SimpleForm>
        </Create>
    );
};
