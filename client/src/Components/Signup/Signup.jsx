import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./Signup.module.css";
import ErrorMsg from "../../Utils/ErrorMsg/ErrorMsg";

const Signup = () => {
  const InitialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
  };

  const ValidationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    mobile: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });

  const OnSubmit = async (values) => {
    console.log(values);
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.signinContainer}>
        <h3 className={styles.signin}>Create Account</h3>
        <Formik
          initialValues={InitialValues}
          validationSchema={ValidationSchema}
          onSubmit={OnSubmit}
        >
          <Form className={styles.form}>
            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="name">
                Name
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="name"
                id="name"
              />
              <ErrorMessage component={ErrorMsg} name="name" />
            </div>

            <div className={styles.inputContainer}>
              <label className={styles.inputlabel} htmlFor="email">
                Email
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
              <label className={styles.inputlabel} htmlFor="mobile">
                Mobile
              </label>
              <Field
                className={styles.inputBox}
                type="text"
                name="mobile"
                id="mobile"
              />
              <ErrorMessage component={ErrorMsg} name="mobile" />
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

            <div className={styles.privacyPolicy}>
              <p>
                By enrolling your mobile phone number, you consent to receive
                automated security notifications via text message from Musicart.
                Message and data rates may apply.
              </p>
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

            <p className={styles.continueMessage}>
              By continuing, you agree to Musicart privacy notice and conditions
              of use.
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Signup;
