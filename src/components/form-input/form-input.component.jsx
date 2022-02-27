import React from "react";
import './form-input.style.scss';

const FormInput = ({handlerChange, label, ...otherProps})=>(
    <div className="group">
        <input className="form-input" onChange={handlerChange} {...otherProps}/>
        {label ? (
            <label className={`${otherProps.value ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
            
            ): null}
    </div>
)

export default FormInput;