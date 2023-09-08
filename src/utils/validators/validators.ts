import React from "react";

export const required = (value: string) => {
    // if (value) {
    //     return 'log'
    // }
    if (!value) {
        return 'Field is required'
    }
    // return 'Field is required'
}

export const maxLengthCreator = (maxlength: number) => (value: string) => {
    console.log(value)
    if (value.length > maxlength) {
        return `Max length is ${maxlength} symbols`
    }
}