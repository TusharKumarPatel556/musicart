import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Login.module.css";
import ErrorMsg from "../../Utils/ErrorMsg/ErrorMsg";

const Login = () => {
  const InitialValues = {
    email: "",
    password: "",
  };

  const ValidationSchema = Yup.object({
    email: Yup.string().required("Email Id or Phone Number is Required"),
    password: Yup.string().required("Password is Required"),
  });

  const OnSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.signinContainer}>
        <h3 className={styles.signin}>Sign in</h3>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={OnSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="email">
                Enter your email or mobile number
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="email"
                id="email"
              />
              <ErrorMessage component={ErrorMsg} name="email" />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="password">
                Password
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="password"
                id="password"
              />
              <ErrorMessage component={ErrorMsg} name="password" />
            </div>

            <div>
              <button
                className={styles.continueBtn}
                variant="text"
                type="submit"
              >
                Continue
              </button>
            </div>

            <div className={styles.privacyPolicy}>
              <p>
                By continuing, you agree to Musicart privacy notice and
                conditions of use.
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
