import React from 'react';
import moment from 'moment';

export default (props) => {
    const items = props.items.map((item, index)=> {
        return (
            <li value={item} key={index} >
                {item.task}
                <ul>
                    <li>Reward: {item.reward} </li>
                    <li>Due Date: {moment(item.dueDate).format('LLLL')}</li>
                    <li>Status: {item.status}</li>
                </ul>
            </li>
        );
    });
    return (
        <ul>
            {items}
        </ul>
        
    );
};