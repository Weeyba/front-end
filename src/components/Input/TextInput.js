import { TextField } from "@mui/material";
import React from "react";

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
