import { Visibility, VisibilityOff } from "@mui/icons-material";
import { IconButton, InputAdornment } from "@mui/material";
import { Formik } from "formik";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as yup from "yup";
import BrandLogo from "../../assets/images/Logo.png";
import TextInput from "../../components/Input/TextInput";
import { CustomButton } from "./Login";
import { AuthBodyContainer, AuthContainer } from "./auth.styled";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const resetPasswordSchema = yup.object().shape({
  resetCode: yup.string().label("Referral code"),
  password: yup
    .string()
    .required()
    .label("Password")
    .min(8, "Seems a bit short")
    .max(17, "That's a lot"),
  confirmPassword: yup
    .string()
    .required()
    .label("Confirm Password")
    .test("passwords-match", "Passwords must match", function (value) {
      return this.parent.newPassword === value;
    }),
});

export default function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  const { email } = useParams();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const arrowStyle = {
    width: "30px",
    height: "30px",
    textAlign: "center",
    fontSize: "150%",
    position: "fixed",
    top: "5%",
    display: "flex",
    alignItems: "center",
    placeContent: "center",
    left: "5%",
    borderRadius: "50%",
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
  };

  return (
    <AuthContainer>
      <p onClick={() => window.history.back()} style={arrowStyle}>
        {" "}
        &#8592;
      </p>
      <AuthBodyContainer>
        <div className="brandLogo">
          <img
            aria-label="Weeyba brand logo"
            style={{ width: 87, height: 50 }}
            src={BrandLogo}
            alt="Weeyba brand logo"
          />
        </div>
        <div className="authHeading">
          <h2>Now let's change your password</h2>
        </div>
        <div>
          <Formik
            initialValues={{
              password: "",
              couponCode: "",
              resetCode: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
            }}
            validationSchema={resetPasswordSchema}
          >
            {(formikProps) => (
              <div className="authForm">
                <div className="textInputContainer">
                  <TextInput
                    id="resetCode"
                    label="Reset code"
                    placeholder="123456"
                    formikProps={formikProps}
                    formikKey="resetCode"
                    value={formikProps.values.resetCode}
                    type="number"
                    InputProps={{
                        min: 6,
                        max: 6
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
                    id="confirmPassword"
                    label="Confirm Password"
                    formikProps={formikProps}
                    formikKey="confirmPassword"
                    placeholder="*********"
                    value={formikProps.values.confirmPassword}
                    type={showConfirmPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>

                <CustomButton
                  onClick={() => {
                    formikProps.handleSubmit();
                  }}
                  variant="contained"
                >
                  Reset password
                </CustomButton>
                <div className="formCTA">
                  <p>Didn't recieve a code?</p>
                  <a href="/forgot-password">Resend</a>
                </div>
              </div>
            )}
          </Formik>
        </div>
      </AuthBodyContainer>
    </AuthContainer>
  );
}
