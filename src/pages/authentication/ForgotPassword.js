import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import BrandLogo from "../../assets/images/Logo.png";
import TextInput from "../../components/Input/TextInput";
import { CustomButton } from "./Login";
import { AuthBodyContainer, AuthContainer } from "./auth.styled";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const forgotPasswordSchema = yup.object().shape({
  email: yup.string().required().label("Email").email(),
});

export default function ForgotPassword() {
  const navigate = useNavigate();

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
          <h2>Let's get you started</h2>
        </div>
        <div>
          <Formik
            initialValues={{
              email: "",
            }}
            onSubmit={async (values, actions) => {
              console.log(values);
              navigate(`/reset-password/${values.email}`);
            }}
            validationSchema={forgotPasswordSchema}
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
                </div>

                <CustomButton
                  onClick={() => {
                    formikProps.handleSubmit();
                  }}
                  variant="contained"
                >
                  Request verification code
                </CustomButton>
              </div>
            )}
          </Formik>
        </div>
      </AuthBodyContainer>
    </AuthContainer>
  );
}
