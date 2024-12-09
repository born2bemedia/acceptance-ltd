"use client";
import React, { useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";

const ContactForm = () => {
  const countries = useMemo(() => countryList().getData(), []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    company: Yup.string().required("Company is required"),
    email: Yup.string().email("Invalid email").required("Corporate Email is required"),
    country: Yup.string().required("Country is required"),
    phone: Yup.string().required("Phone is required"),
    message: Yup.string().required("Message is required"),
    agree: Yup.bool().oneOf([true], "You must agree to the Privacy Policy"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    country: "",
    phone: "",
    message: "",
    agree: false,
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values }) => (
        <Form className="contact-form">
          <div className="form-group">
            <label>First Name</label>
            <Field name="firstName" type="text" className="form-control" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Last Name</label>
            <Field name="lastName" type="text" className="form-control" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Company</label>
            <Field name="company" type="text" className="form-control" />
            <ErrorMessage name="company" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Corporate Email</label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Country</label>
            <Select
              options={countries}
              onChange={(selectedOption) => setFieldValue("country", selectedOption.value)}
              value={countries.find((option) => option.value === values.country)}
              className="form-control"
            />
            <ErrorMessage name="country" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Phone</label>
            <PhoneInput
              country="us"
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
              className="form-control"
            />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label>Message</label>
            <Field name="message" as="textarea" className="form-control" />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <div className="form-group checkbox-group">
            <Field name="agree" type="checkbox" className="form-checkbox" />
            <label>
              I agree to the processing of my data according to the Privacy Policy.
            </label>
            <ErrorMessage name="agree" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
