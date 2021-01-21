import React from 'react';
import { useTranslate } from 'react-admin';
import { WeekDay } from '../types';

export const WeekDayList = Object.values(WeekDay)
    .filter((e) => typeof WeekDay[e] === 'number')
    .map((name) => ({
        id: WeekDay[name],
        code: name,
        name: `resources.WeekDay.data.${name}`,
    }));

const WeekDayField = (props) => {
    const translate = useTranslate();
    return (
        <>
        {/* <a href={record[source]} className={classes.link} target={'_blank'} rel={'noopener noreferrer'}>
            {record[source]}
            <LaunchIcon className={classes.icon} />
        </a> */}
        <span>
            {translate(`resources.WeekDay.data.${WeekDay[props.record[props.source]]}`)}
        </span>
        </>
    );
};
WeekDayField.defaultProps = {
    source: 'first_day_id',
    // label: 'Статус'
}
export default WeekDayField;
