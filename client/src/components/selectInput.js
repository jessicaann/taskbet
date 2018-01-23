import React from 'react';

export default (props) => {
    const selectName = props.selectName;
    const options = props.options.map((optionName, index)=> {
        return (
            <option value={index}>{optionName}</option>
        );
    });
    return (
        <select className="col" name={selectName}>
            {options}
        </select>
    );
};