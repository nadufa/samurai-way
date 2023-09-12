import React from "react";
import styles from './FormsControls.module.css'
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

export const FormControl = ({input, meta: {touched, error}, children}: any) => {
    const hasError = touched && error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const TextArea = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <textarea {...input} {...restProps} />
        </FormControl>
    )
}


export const Input = (props: any) => {
    const {input, meta, ...restProps} = props
    return (
        <FormControl {...props}>
            <input {...input} {...restProps} />
        </FormControl>
    )
}

export const createField = (placeholder: string | null, name: string, validators: any[], component: any, props = {}, text = "") => (
    <div>
        <Field
            component={component}
            validate={validators}
            name={name}
            placeholder={placeholder}
            {...props}
        /> {text}
    </div>
)