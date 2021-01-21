import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps } from 'react-admin';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const ItemCategoryEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            {/* <TextInput source="parent_category_id" /> */}

            <ReferenceInput source="parent_category_id" reference="ItemCategory">
                <SelectInput optionText="name" />
            </ReferenceInput>

        </SimpleForm>
    </Edit>
);
