import React from 'react';

export default (props) => {
    const labelName = props.labelName;
    const placeholder= props.placeholder;
    const inputName = props.inputName;
    const labelCol = props.labelCol;
    const inputCol = props.inputCol;
    return(
        <div className="form-group row">
            <label className= {`col-form-label col-${labelCol}`}>{labelName}</label>
            <div className={`col-${inputCol}`}>
                <textarea className="form-control" name={inputName} placeholder={placeholder}/>
            </div>
        </div>
    );
};