import React from 'react';

export default (props) => {
    console.log(props);
    const items = props.items.map((item, index)=> {
        return (
            <li value={item} key={index} >{item}</li>
        );
    });
    return (
        <ul>
            {items}
        </ul>
        
    );
};