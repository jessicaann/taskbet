import React from 'react';

export default (props) => {
    const labelName = props.labelName;
    const placeholder= props.placeholder;
    const inputName = props.inputName;
    const type = props.type;
    const labelCol = props.labelCol;
    const inputCol = props.inputCol;

    let content = null;
    if(labelName) {
        content = 
        <div className="form-group row">
            <label className= {`col-form-label col-${labelCol}`}>{labelName}</label>
            <div className={`col-${inputCol}`}>
                <input className="form-control" type={type} name={inputName} placeholder={placeholder}/>
            </div>
        </div>;
    }
    else{
        content =
        <div className="form-group row">
            <div className={`col-${inputCol}`}>
                <input className="form-control" type={type} name={inputName} placeholder={placeholder}/>
            </div>
        </div>;
    }
    return(
        content
    );
};