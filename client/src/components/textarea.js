import React from 'react';

export default (props) => {
    const labelName = props.labelName;
    const placeholder= props.placeholder;
    const inputName = props.inputName;
    return(
        <div className="form-group">
            <div className="col-3">
                <label className="form-label">{labelName}</label>
            </div>
            <div className="col-9">
                <textarea className="form-input" name={inputName} placeholder={placeholder}/>
            </div>
        </div>
    );
};