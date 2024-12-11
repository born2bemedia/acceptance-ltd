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
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    company: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email").required("This field is required"),
    country: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    message: Yup.string(), // Поле необязательное
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

  const handleSubmit = async (values, { setSubmitting, resetForm, setStatus }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Form submitted successfully");
        resetForm();
        setStatus(null);
      } else {
        setStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, errors, touched, isValid, status }) => (
        <Form className="contact-form">
          <div className={`form-group ${errors.firstName && touched.firstName ? "invalid" : ""}`}>
            <Field name="firstName" type="text" className="form-control" placeholder="First Name" />
          </div>

          <div className={`form-group ${errors.lastName && touched.lastName ? "invalid" : ""}`}>
            <Field name="lastName" type="text" className="form-control" placeholder="Last Name" />
          </div>

          <div className={`form-group ${errors.company && touched.company ? "invalid" : ""}`}>
            <Field name="company" type="text" className="form-control" placeholder="Company" />
          </div>

          <div className={`form-group ${errors.email && touched.email ? "invalid" : ""}`}>
            <Field name="email" type="email" className="form-control" placeholder="Corporate Email" />
          </div>

          <div className={`form-group ${errors.country && touched.country ? "invalid" : ""}`}>
            <Select
              options={countries}
              onChange={(selectedOption) => setFieldValue("country", selectedOption.label)}
              value={countries.find((option) => option.label === values.country)}
              className="form-control"
              placeholder="Country"
            />
          </div>

          <div className={`form-group ${errors.phone && touched.phone ? "invalid" : ""}`}>
            <PhoneInput
              country="us"
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
              className="form-control"
            />
          </div>

          <div className={`form-group form-group__message ${errors.message && touched.message ? "invalid" : ""}`}>
            <Field name="message" as="textarea" className="form-control" placeholder="Message" />
          </div>

          <div className={`form-group checkbox-group ${errors.agree && touched.agree ? "invalid" : ""}`}>
            <Field
              name="agree"
              type="checkbox"
              id="agree"
              className="form-checkbox"
            />
            <label htmlFor="agree">
              I agree to the processing of my data according to the Privacy Policy.
            </label>
          </div>

          

          <button type="submit" className="btn btn-primary">
            Submit
          </button>

          {/* Показываем ошибку, если есть ошибки */}
          {Object.keys(errors).length > 0 && touched && (
            <div className="error-message">This field is required</div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
