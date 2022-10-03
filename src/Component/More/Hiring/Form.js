import React from 'react'
import './form.css'

const Form = (props) => {
    const [focused, setFocused] = React.useState(false);
    const { label, errorMessage, onChange, id, ...inputprops } = props;   

    const handleFocus = (e) => {
        setFocused(true);
    }
    return (
        <>
            <div >
                <label><strong>{label}</strong></label>
                <div className='form-input'>
                <input
                    {...inputprops}
                    onChange={onChange}
                    onBlur={handleFocus}
                    focused={focused.toString()}
                />
                </div>
                <span className='error-message'>{errorMessage}</span>
            </div>        
        </>
    )
}

export default Form
