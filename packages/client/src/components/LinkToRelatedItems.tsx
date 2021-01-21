import * as React from 'react';
import { FC } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useTranslate } from 'react-admin';
import { stringify } from 'query-string';

// import visitors from '../visitors';

const useStyles = makeStyles({
    icon: { paddingRight: '0.5em' },
    link: {
        display: 'inline-flex',
        alignItems: 'center',
    },
});

const LinkToRelatedItems: FC = (props: any) => {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Button
            size="small"
            color="primary"
            component={Link}
            to={{
                pathname: '/Item',
                search: stringify({
                    filter: JSON.stringify({ category_id: props.record.id }),
                }),
            }}
            className={classes.link}
        >
            {/* <visitors.icon className={classes.icon} /> */}
            {translate('resources.Item.name')}
        </Button>
    );
};

export default LinkToRelatedItems;