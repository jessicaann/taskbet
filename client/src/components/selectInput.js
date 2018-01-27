import React from 'react';

export default (props) => {
    const {selectName, onChange} = props;
    
    const options = props.options.map((optionName, index)=> {
        return (
            <option value={optionName} key={index} >{optionName}</option>
        );
    });
    return (
        <select className="col" name={selectName} onChange={onChange}>
            {options}
        </select>
    );
};