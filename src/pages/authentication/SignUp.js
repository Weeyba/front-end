import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import TextInput from "../../components/Input/TextInput";
import { AuthBodyContainer, AuthContainer } from "./auth.styled";
import styled from "@emotion/styled";
import { Colors } from "../../components/Colors/Colors";
import { CustomButton } from "./Login";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Please enter your First Name")
    .label("First Name"),
  lastName: yup
    .string()
    .required("Please enter your Last Name")
    .label("Last Name"),
  email: yup.string().required().label("Email").email(),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .label("Phone number")
    .required("Please enter Phone Number"),
  password: yup
    .string()
    .required()
    .label("Password")
    .min(8, "Seems a bit short"),
  referral_code: yup.string().label("Referral code"),
});

export default function SignUp() {
  return (
    <AuthContainer>
        
    </AuthContainer>
  )
}
