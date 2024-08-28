import React from 'react'
import { SignUpFormFieldProps } from '../utils/types'

const SignUpFormField: React.FC<SignUpFormFieldProps> = ({
    name,
    placeholder,
    inputType,
    formControl
}) => {
    return (
        <>
            <label style={{ alignSelf: 'flex-start', marginLeft: '0.2rem', marginRight: '0.8rem' }}>{name.toUpperCase()}</label>
            <input
                autoComplete='off'
                placeholder={placeholder}
                type={inputType}
                {...formControl.register(name)}
            />
        </>
    )
}

export default SignUpFormField
