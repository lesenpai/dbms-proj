import React from 'react';
import { FC, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { FieldProps, Labeled } from 'react-admin';
// import AvatarField from './AvatarField';
import { IUserModel } from '../../types';

export const Address = (record) => ['country', 'city', 'street', 'building'].map((e) => record[e]).join(', ');

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },
    avatar: {
        marginRight: theme.spacing(1),
        marginTop: -theme.spacing(0.5),
        marginBottom: -theme.spacing(0.5),
    },
}));

/* interface Props extends FieldProps<IUserModel> {
    size?: string;
} */

const AddressField = ({ record, size }: any) => {
    const classes = useStyles();
    return record ? (
        <Labeled label='Адрес'>
            <div className={classes.root}>
                {/* <AvatarField className={classes.avatar} record={record} size={size} /> */}
                {Address(record)} 
                {record.office ? `, ${record.office}` : ''}
            </div>
        </Labeled>
    ) : null;
};

AddressField.defaultProps = {
    // source: 'name',
    addLabel: true,
    label: 'Адрес',
};

export default memo(AddressField);
