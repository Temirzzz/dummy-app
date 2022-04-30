import React from "react";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import { Formik } from "formik";
import { StyledForm, ErrorMessage, Title } from "../../styled-components";

const FormikForm = () => (
  <div>
    <Title stTitleMargin="30px 0 0 0">Form Page</Title>
    <Formik
      initialValues={{
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      }}
      validate={(values) => {
        let errors = {};

        if (!values.email) {
          errors.email = "Email is required";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values)) {
          errors.email = "Invalid email address";
        }

        if (!values.firstname) {
          errors.firstname = "Firstname is required";
        } else if (values.firstname.length < 4) {
          errors.firstname = "firstname must be 4 characters";
        }

        if (!values.lastname) {
          errors.lastname = "Lastname is required";
        } else if (values.lastname.length < 4) {
          errors.lastname = "lastname must be 4 characters";
        }
        if (!values.password) {
          errors.password = "A password is required";
        } else if (values.password.length < 6) {
          errors.password = "Password must be 6 characters";
        }
        return errors;
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      render={({
        touched,
        errors,
        values,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <StyledForm
          stFormMargin="60px 0 0 0"
          stFormPadding="20px 25px"
          onSubmit={handleSubmit}
        >
          <Input
            stInpMargin="0 0 15px 0"
            value={values.firstname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
            id="firstname"
            name="firstname"
          />
          {touched.firstname && errors.firstname && (
            <ErrorMessage color="red">{errors.firstname}</ErrorMessage>
          )}
          <Input
            stInpMargin="0 0 15px 0"
            value={values.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Lastname"
            id="lastname"
            name="lastname"
          />
          {touched.lastname && errors.lastname && (
            <ErrorMessage color="red">{errors.lastname}</ErrorMessage>
          )}
          <Input
            border={touched.email && errors.email && "1px solid red"}
            stInpMargin="0 0 15px 0"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            id="email"
            name="email"
          />
          {touched.email && errors.email && (
            <ErrorMessage color="red">{errors.email}</ErrorMessage>
          )}
          <Input
            stInpMargin="0 0 15px 0"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Password"
            id="password"
            name="password"
            type="password"
          />
          {touched.password && errors.password && (
            <ErrorMessage color="red">{errors.password}</ErrorMessage>
          )}
          <Button type="submit" stBtnColor="darkcyan">
            Enter
          </Button>
        </StyledForm>
      )}
    />
  </div>
);

export default FormikForm;
