import React from 'react';

export default (props) => {
    const {selectName, onChange, value} = props;
    
    const options = props.options.map((optionName, index)=> {
        return (
            <option value={optionName} key={index} >{optionName}</option>
        );
    });
    return (
        <select value={value} className="col" name={selectName} onChange={onChange}>
            {options}
        </select>
    );
};