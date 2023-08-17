import { TextField } from "@mui/material";
import React from "react";
import { Colors } from "../Colors/Colors";

import { styled } from '@mui/material/styles';

// Create a custom styled version of TextField
const CustomTextField = styled(TextField)(({ theme }) => ({
  '& .MuiFilledInput-root': {
    // Add your custom styles for the FilledInput here
    // For example:
    backgroundColor: Colors.neutral_color.color200,
    color: Colors.orange_color.color200
  },
  '& .MuiFilledInput-underline:before': {
    // Add your custom styles for the underline before focus here
    // For example:
    borderBottom: `1px solid ${Colors.orange_color.color100}` 
  },
  '& .MuiFilledInput-underline:after': {
    // Add your custom styles for the underline after focus here
    // For example:
    borderBottom: `1px solid ${Colors.orange_color.color200}` ,
  },
  '& .MuiFormLabel-root': {
    // Add your custom styles for the form label here
    // For example:
    color: Colors.neutral_color.color500,
  },
  '& .MuiFormHelperText-root': {
    // Add your custom styles for the helper text here
    // For example:
    color: '#ff0000',
  },
}));


const TextInput = ({
  label,
  formikProps,
  formikKey,
  onChangeText,
  ...rest
}) => {
  
  const error = formikProps.touched[formikKey] && formikProps.errors[formikKey]

 

  return (
    <FieldWrapper formikKey={formikKey} formikProps={formikProps} label={label}>
      <TextField
        id="filled-basic"
        label={label}
        variant="filled"
       
        onChange={formikProps.handleChange(formikKey)}
        onBlur={formikProps.handleBlur(formikKey)}
        error={error}
        helperText={error ? `${label} is required` : ""}
        {...rest}
      />
    </FieldWrapper>
  );
};
const FieldWrapper = ({ children, label, formikProps, formikKey }) => {
  //   if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
  //     labelStyles.color = Colors.ashShade;
  //   }
  return (
    <div style={styles.inputContainer}>
      {children}
    </div>
  );
};
const styles = {
  error: {
    marginBottom: 10,
    color: "red",
    fontSize: 12,
  },
  input: {
    padding: 10,
    marginBottom: 3,
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
};

export default TextInput;
