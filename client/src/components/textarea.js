import React from 'react';

export default (props) => {

    const { labelName, placeholder, inputName, labelCol, inputCol, onChange, value} = props;
    return(
        <div className="form-group row">
            <label className= {`col-form-label col-${labelCol}`}>{labelName}</label>
            <div className={`col-${inputCol}`}>
                <textarea value={value} className="form-control" name={inputName} placeholder={placeholder} onChange={onChange}/>
            </div>
        </div>
    );
};