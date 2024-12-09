"use client";
import React, { useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list"; // Список стран

const ContactForm = () => {
  const countries = useMemo(() => countryList().getData(), []); // Получение списка стран

  // Валидационная схема
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

  // Начальные значения
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

  // Обработка отправки формы
  const handleSubmit = async (values, { resetForm }) => {
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
        resetForm(); // Сброс формы
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
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
            <Field name="firstName" type="text" className="form-control" placeholder="First Name" />
            <ErrorMessage name="firstName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <Field name="lastName" type="text" className="form-control" placeholder="Last Name" />
            <ErrorMessage name="lastName" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <Field name="company" type="text" className="form-control" placeholder="Company" />
            <ErrorMessage name="company" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <Field name="email" type="email" className="form-control" placeholder="Corporate Email" />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <Select
              options={countries}
              onChange={(selectedOption) => setFieldValue("country", selectedOption.label)}
              value={countries.find((option) => option.label === values.country)}
              className="form-control"
            />
            <ErrorMessage name="country" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <PhoneInput
              country="us"
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
              className="form-control"
            />
            <ErrorMessage name="phone" component="div" className="error-message" />
          </div>

          <div className="form-group form-group-massage">
            <Field name="message" as="textarea" className="form-control" placeholder="Message"  />
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
            Submit<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M13.0002 0C13.2654 0 13.5198 0.105357 13.7073 0.292893C13.8948 0.48043 14.0002 0.734784 14.0002 1V9C14.0002 9.26522 13.8948 9.51957 13.7073 9.70711C13.5198 9.89464 13.2654 10 13.0002 10C12.735 10 12.4806 9.89464 12.2931 9.70711C12.1055 9.51957 12.0002 9.26522 12.0002 9V3.414L2.05018 13.364C1.86158 13.5462 1.60898 13.647 1.34678 13.6447C1.08458 13.6424 0.83377 13.5372 0.648362 13.3518C0.462954 13.1664 0.357785 12.9156 0.355507 12.6534C0.353228 12.3912 0.454022 12.1386 0.636181 11.95L10.5862 2H5.00018C4.73496 2 4.48061 1.89464 4.29307 1.70711C4.10554 1.51957 4.00018 1.26522 4.00018 1C4.00018 0.734784 4.10554 0.48043 4.29307 0.292893C4.48061 0.105357 4.73496 0 5.00018 0H13.0002Z" fill="white"/>
</svg>
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
