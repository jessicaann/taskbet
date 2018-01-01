import React from 'react';

export default (props) => {
    const labelName = props.labelName;
    const placeholder= props.placeholder;
    const inputName = props.inputName;
    const type = props.type;
    return(
        <div className="form-group">
            <div className="col-3">
                <label className="form-label">{labelName}</label>
            </div>
            <div className="col-9">
                <input className="form-input" type={type} name={inputName} placeholder={placeholder}/>
            </div>
        </div>
    );
};