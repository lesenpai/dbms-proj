import React from 'react';
import { useTranslate } from 'react-admin';
import { ContentStatus } from '../types';

export const StatusList = Object.values(ContentStatus)
    .filter((e) => typeof ContentStatus[e] === 'number')
    .map((name) => ({
        id: ContentStatus[name],
        code: name,
        name: `resources.Status.data.${name}`,
    }));

const StatusField = (props) => {
    const translate = useTranslate();
    return (
        <>
        {/* <a href={record[source]} className={classes.link} target={'_blank'} rel={'noopener noreferrer'}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a> */}
        <span>
            {translate(`resources.Status.data.${ContentStatus[props.record.status]}`)}
        </span>
        </>
    );
};
StatusField.defaultProps = {
    source: 'status',
    label: 'Статус'
}
export default StatusField;
