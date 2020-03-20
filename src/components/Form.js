import React from "react";
import { withFormik, Field, Form } from "formik";
import axios from "axios"
import * as Yup from "yup";


function UserForm(props) {
  const { touched, errors } = props;
  return (
    <Form className="form">
      <label htmlFor="first_name">First Name:</label>
      <Field name="first_name" placeholder="First Name" />
      {touched.first_name&& errors.first_name ? (
        <span className="error">{errors.first_name}</span>
      ) : null}

      <label htmlFor="last_name">Last Name:</label>
      <Field name="last_name" placeholder="Last Name" />
      {touched.last_name && errors.last_name ? (
        <span className="error">{errors.last_name}</span>
      ) : null}

      <label htmlFor="email">Email:</label>
      <Field name="email" placeholder="Email" />

      {touched.email && errors.email ? (
        <span className="error">{errors.email}</span>
      ) : null}

      <label htmlFor="password">Password:</label>
      <Field name="password" type="password" placeholder="Password" />
      {touched.password && errors.password ? (
        <span className="errors">{errors.password}</span>
      ) : null}

      <label htmlFor="tos">
        Read the Terms of Service?
        <Field name="tos" type="checkbox" />
        {touched.tos && errors.tos ? (
          <span className="errors">{errors.tos}</span>
        ) : null}
      </label>
      <button type="submit" className="submitBtn" disabled = {!props.isValid}>
        Submit
      </button>
    </Form>
  );
}

export default withFormik({


  mapPropsToValues: props => {
    return {
      first_name: props.first_name || "",
      last_name: props.last_name || "",
      email: props.email || "",
      password: props.password || "",
      tos: props.tos || false
    };
  },


  validationSchema: Yup.object().shape({
    first_name: Yup.string().required("Please give your first name"),
    last_name: Yup.string().required("Please give your last name"),
    email: Yup.string()
      .email("Email must be valid.")
      .required("Must include Email"),
    password: Yup.string().required("Must create Password"),
    tos: Yup.boolean().oneOf([true], "Please agree to the Terms of Service")
  }), 
  
  handleSubmit: (values, formikBag) =>{
    axios
    .post("https://reqres.in/api/users", values)
    .then(response => {
      console.log(response);
    
    })
    .catch(err => console.log(err));
     
      formikBag.setStatus("User Created!")
      formikBag.resetForm()
   }
})(UserForm);
