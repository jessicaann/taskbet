import React from 'react';

export default (props) => {

    const { labelName, placeholder, inputName, type, labelCol, inputCol, onChange} = props;
    return(
        <div className="form-group row">
            <label className= {`col-form-label col-${labelCol}`}>{labelName}</label>
            <div className={`col-${inputCol}`}>
                <textarea className="form-control" name={inputName} placeholder={placeholder} onChange={onChange}/>
            </div>
        </div>
    );
};