import React, { memo } from 'react';
import { FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { FieldProps } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';

import { IUserModel } from '../../types';

interface Props extends FieldProps<IUserModel> {
    className?: string;
    size?: string;
}

const useStyles = makeStyles((theme) => ({
    avatar: {
        marginRight: theme.spacing(1),
        marginTop: -theme.spacing(0.5),
        marginBottom: -theme.spacing(0.5),
    },
}));

const AvatarField: FC<Props> = ({ record, size = '25', className, source }) => {
    const classes = useStyles();

    return record ? (
        <Avatar
            src={`${record[source]}?size=${size}x${size}`}
            style={{ width: parseInt(size, 10), height: parseInt(size, 10) }}
            className={className ?? classes.avatar}
        />
    ) : null;
};

AvatarField.defaultProps = {
    source: 'image_path',
    label: 'resources.user.fields.image_path',
};
export default memo<Props>(AvatarField);
