import React from 'react';
import { TextField } from '@material-ui/core';
import { useField } from 'formik';

// **USE: UI for reusable TextFields that combines material-ui and formik together
const TextFieldWrapper = ({
    name,
    ...otherProps
}) => {
    const [field, mata] = useField(name);

    //  TextField styling
    // ...otherProps refer to the other attributes of the material-ui text field such as labels etc.
    const configTextfield = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    // for yup form validation
    if (mata && mata.touched && mata.error) {
        configTextfield.error = true;
        configTextfield.helperText = mata.error;
    }

    return (
        <TextField {...configTextfield} />
    );
};

export default TextFieldWrapper;