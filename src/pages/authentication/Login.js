import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import TextInput from "../../components/Input/TextInput";
import { AuthBodyContainer, AuthContainer } from "./auth.styled";
import styled from "@emotion/styled";
import { Colors } from "../../components/Colors/Colors";

const loginSchema = yup.object().shape({
  email: yup.string().required().label("Email").email(),
  password: yup
    .string()
    .required()
    .label("Password")
    .min(8, "Seems a bit short"),
});

export const CustomButton = styled(Button)(({ theme }) => ({
  color: Colors.white,
  backgroundColor: Colors.orange_color.color300,
  width: "100%",
  '&:hover': {
    backgroundColor: Colors.orange_color.color200,
  },
}));

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <AuthContainer>
      <AuthBodyContainer>
        <div className="authHeading">
          <h2>Welcome, please sign in</h2>
        </div>
        <div>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
            }}
            validationSchema={loginSchema}
          >
            {(formikProps) => (
              <div className="authForm">
                <div className="textInputContainer">
                  <TextInput
                    id="email"
                    label="Email"
                    placeholder="johndoe@example.com"
                    formikProps={formikProps}
                    formikKey="email"
                    value={formikProps.values.email}
                    type="email"
                  />

                  <TextInput
                    id="password"
                    label="Password"
                    formikProps={formikProps}
                    formikKey="password"
                    placeholder="*********"
                    value={formikProps.values.password}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <a href="#" className="forgotPassword">
                    Forgot password?
                  </a>
                </div>

                <CustomButton
                  onClick={() => {
                    formikProps.handleSubmit();
                  }}
                  variant="contained"
                >
                  Sign in
                </CustomButton>
                <div className="formCTA">
                  
                    <p>Don't have an account?</p>
                    <a href="/signup">Sign up</a>
                
                </div>
              </div>
            )}
          </Formik>
        </div>
      </AuthBodyContainer>
    </AuthContainer>
  );
}
