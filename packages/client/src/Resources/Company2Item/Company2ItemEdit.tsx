import React, { FC } from 'react';
import { Edit, SimpleForm, TextInput, ReferenceInput, SelectInput, EditProps, ImageField, ImageInput } from 'react-admin';
import StatusField, { StatusList } from '../../components/StatusField';

const Title = (props) => {
    const { record } = props ?? { record: { name: 'None' } };
    return <span>{record ? `"${record.name}"` : ''}</span>;
};

export const Company2ItemEdit: FC<EditProps> = (props) => (
    <Edit title={<Title />} {...props}>
        <SimpleForm>
            
            {/* <TextInput source="id" disabled /> */}
            <ReferenceInput source='item_id' reference='Item'>
                <SelectInput optionText='name' />
            </ReferenceInput>
            <TextInput source='price' />
            <TextInput source='description' />
            {/* <TextInput source="status" /> */}

            <ReferenceInput source='company_id' reference='Company'>
                <SelectInput optionText='full_name' />
            </ReferenceInput>
            <SelectInput source='status' choices={StatusList} />
        </SimpleForm>
    </Edit>
);
