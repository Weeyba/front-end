import { Visibility, VisibilityOff } from "@mui/icons-material";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton, InputAdornment } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Formik } from "formik";
import React, { useState } from "react";
import * as yup from "yup";
import TextInput from "../../components/Input/TextInput";
import { CustomButton } from "./Login";
import { AuthBodyContainer, AuthContainer } from "./auth.styled";

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
    .min(17, "Seems a bit short")
    .max(17, "That's a lot"),
  couponCode: yup
    .string()
    .required()
    .label("Coupon code")
    .min(8, "Seems a bit short"),
  referralCode: yup.string().label("Referral code"),
});

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };



    const arrowStyle={
      width:'30px',
      height:'30px',
      textAlign:'center',
        fontSize:'150%',
      position:'fixed',
      top:'5%',
      display:'flex',
      alignItems:'center',
      placeContent:'center',
      left:'5%',
      borderRadius:'50%',
      backgroundColor:'white',
      color:'black',
  }
  
  return (
    <AuthContainer>
    <p style={arrowStyle}> &#8592;</p>
      <AuthBodyContainer>
        <div className="authHeading">
          <h2>Let's get you started</h2>
        </div>
        <div>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              phone: "",
              couponCode: "",
              referralCode: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
            }}
            validationSchema={signUpSchema}
          >
            {(formikProps) => (
              <div className="authForm">
                <div className="textInputContainer">
                  <TextInput
                    id="firstName"
                    label="First name"
                    placeholder="John"
                    formikProps={formikProps}
                    formikKey="firstName"
                    value={formikProps.values.firstName}
                    type="text"
                  />
                  <TextInput
                    id="lastName"
                    label="Last name"
                    placeholder="Doe"
                    formikProps={formikProps}
                    formikKey="lastName"
                    value={formikProps.values.lastName}
                    type="text"
                  />
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
                    id="phone"
                    label="Phone number"
                    placeholder="00000000000"
                    formikProps={formikProps}
                    formikKey="phone"
                    value={formikProps.values.phone}
                    type="number"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
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

                  <TextInput
                    id="couponCode"
                    label="Coupon code"
                    placeholder="xxx-xxxx-xxxx-xxxx"
                    formikProps={formikProps}
                    formikKey="couponCode"
                    value={formikProps.values.couponCode}
                    type="text"
                  />

                  <a href="#" className="forgotPassword">
                    Don't have a code? Get one here
                  </a>

                  <TextInput
                    id="referralCode"
                    label="Referral code"
                    placeholder="@JohnDoe"
                    formikProps={formikProps}
                    formikKey="referralCode"
                    value={formikProps.values.referralCode}
                    type="text"
                  />

                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        color="primary"
                      />
                    }
                    label={
                      <span>
                        I agree to the <a href="#">terms</a> and{" "}
                        <a href="#">privacy policy</a>
                      </span>
                    }
                  />
                </div>

                <CustomButton
                  onClick={() => {
                    formikProps.handleSubmit();
                  }}
                  variant="contained"
                >
                  Sign up
                </CustomButton>
                <div className="formCTA">
                  <p>Already have an account?</p>
                  <a href="/login">Sign in</a>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </AuthBodyContainer>
    </AuthContainer>
  );
}
  
