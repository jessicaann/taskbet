import React from 'react';

export default (props) => {
    const labelName = props.labelName;
    const placeholder= props.placeholder;
    const inputName = props.inputName;
    const type = props.type;


    let content = null;
    if(labelName) {
        content = 
        <div className="form-group">
            <div className={`col-${labelCol}`}>
                <label className="form-label">{labelName}</label>
            </div>
            <div className={`col-${inputCol}`}>
                <input className="form-input" type={type} name={inputName} placeholder={placeholder}/>
            </div>
        </div>;{`col-${inputCol}`}{`col-${inputCol}`}
    }
    return(
        {content}
    );
};