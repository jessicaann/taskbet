import React from 'react';

export default (props) => {
    const { labelName, placeholder, inputName, type, labelCol, inputCol, onChange, value, required } = props;

    let content = null;
    if(labelName) {
        content = 
        <div className="form-group row">
            <label className= {`col-form-label col-${labelCol}`}>{labelName}</label>
            <div className={`col-${inputCol}`}>
                <input className="form-control" type={type} name={inputName} value={value} placeholder={placeholder} onChange={onChange}/>
            </div>
        </div>;
    }
    else{
        content =
        <div className="form-group  row">
            <div className={`col-${inputCol}`}>
                <input className="form-control" type={type} name={inputName} value={value} placeholder={placeholder} onChange={onChange} required={required}/>
            </div>
        </div>;
    }
    return(
        content
    );
};