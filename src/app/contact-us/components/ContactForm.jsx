"use client";
import React, { useMemo, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import "react-phone-input-2/lib/style.css";
import countryList from "react-select-country-list";

const ContactForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  // Страны для исключения
  const excludedCountries = [
    "Israel",
    "United States of America",
    "Albania",
    "Barbados",
    "Bosnia and Herzegovina",
    "Guyana",
    "Jamaica",
    "Lao",
    "Mauritius",
    "Myanmar",
    "Nicaragua",
    "Uganda",
    "Vanuatu",
    "Afghanistan",
    "Bahamas",
    "Botswana",
    "Cambodia",
    "Ethiopia",
    "Ghana",
    "Iceland",
    "Iraq",
    "Mongolia",
    "Pakistan",
    "Panama",
    "Sri Lanka",
    "Trinidad and Tobago",
    "Tunisia",
    "US Virgin Island",
    "Yemen",
    "Zimbabwe",
    "Russia",
    "Belarus",
    "Cuba",
    "North Korea",
    "Sudan",
    "Syria",
    "Alger",
    "Bangladesh",
    "Bolivia",
    "China",
    "Kyrgyzstan",
    "Macedonia",
    "Nepal",
    "Nigeria",
    "Thailand",
    "USA",
    "Korea",
    "Syrian",
    "Arab Republic",
    "Somalia",
    "Vietnam",
    "Colombia",
    "Ecuador",
    "Algeria",
    "Indonesia",
    "Jordan",
    "Morocco",
    "Saudi Arabia",
    "Taiwan",
  ];

  // Фильтруем список стран
  const countries = useMemo(() => {
    const allCountries = countryList().getData();
    return allCountries.filter(
      (country) => !excludedCountries.includes(country.label)
    );
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("This field is required"),
    lastName: Yup.string().required("This field is required"),
    company: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("This field is required"),
    country: Yup.string().required("This field is required"),
    phone: Yup.string().required("This field is required"),
    message: Yup.string(),
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

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmissionStatus("success");
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
        }, 400);
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      setSubmissionStatus("error");
      setSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper">
      {submissionStatus === "success" && (
        <div className="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
          <rect width="64" height="64" rx="8" fill="#E7E7E7" fill-opacity="0.4"/>
          <path d="M18.3079 20.9272C18.1668 25.0731 22.7206 30.5123 25.4555 32.5658C28.8161 31.9336 35.3059 29.068 37.0127 25.2869C37.6689 23.8322 37.6935 22.2867 37.081 21.0464C36.5117 19.8947 35.4431 19.0842 34.0721 18.7649C31.1042 18.0714 28.7948 20.3732 28.7718 20.3962C28.6378 20.5324 28.4431 20.5887 28.2566 20.5449C28.0707 20.5012 27.9214 20.3639 27.8618 20.1829C27.8514 20.1528 26.7976 17.0685 23.8291 16.3772C23.443 16.287 23.0613 16.2427 22.6895 16.2427C21.7406 16.2427 20.8547 16.5325 20.1213 17.0942C19.0237 17.9358 18.3626 19.3331 18.3084 20.9278L18.3079 20.9272Z" fill="white"/>
          <path d="M39.2861 46.7641C41.676 45.6934 45.9312 42.4805 46.535 39.4207C46.7652 38.2559 46.524 37.1342 45.8738 36.3429C45.2717 35.6106 44.3666 35.207 43.3248 35.207C41.0585 35.207 39.7663 37.2693 39.7537 37.2906C39.6542 37.4525 39.4775 37.552 39.2872 37.552C39.1073 37.5537 38.9181 37.453 38.8191 37.2895C38.8076 37.2698 37.5142 35.207 35.2485 35.207C34.2067 35.207 33.3011 35.6101 32.6996 36.3429C32.0493 37.1342 31.8082 38.2559 32.0384 39.4202C32.6022 42.2787 36.5638 45.5555 39.2867 46.7636L39.2861 46.7641Z" fill="white"/>
          </svg>
          <h2>Thank You for Your Submission! </h2>
          <span>
            Your request has been received. Our team will review it and
            contact you shortly. If you have any questions, feel free to
            reach out.
            <br />
            <br />
            We look forward to assisting you!
          </span>
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="error-message">
          Something went wrong. Please try again later.
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values, errors, touched }) => (
          <Form className="contact-form">
            <div
              className={`form-group ${
                errors.firstName && touched.firstName ? "invalid" : ""
              }`}
            >
              <Field
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>

            <div
              className={`form-group ${
                errors.lastName && touched.lastName ? "invalid" : ""
              }`}
            >
              <Field
                name="lastName"
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>

            <div
              className={`form-group ${
                errors.company && touched.company ? "invalid" : ""
              }`}
            >
              <Field
                name="company"
                type="text"
                className="form-control"
                placeholder="Company"
              />
            </div>

            <div
              className={`form-group ${
                errors.email && touched.email ? "invalid" : ""
              }`}
            >
              <Field
                name="email"
                type="email"
                className="form-control"
                placeholder="Corporate Email"
              />
            </div>

            <div
              className={`form-group ${
                errors.country && touched.country ? "invalid" : ""
              }`}
            >
              <Select
                options={countries}
                onChange={(selectedOption) =>
                  setFieldValue("country", selectedOption.label)
                }
                value={countries.find(
                  (option) => option.label === values.country
                )}
                className="form-control"
                placeholder="Country"
              />
            </div>

            <div
              className={`form-group ${
                errors.phone && touched.phone ? "invalid" : ""
              }`}
            >
              <PhoneInput
                country="us"
                value={values.phone}
                onChange={(phone) => setFieldValue("phone", phone)}
                className="form-control"
              />
            </div>

            <div
              className={`form-group form-group__message ${
                errors.message && touched.message ? "invalid" : ""
              }`}
            >
              <Field
                name="message"
                as="textarea"
                className="form-control"
                placeholder="Message"
              />
            </div>

            <div
              className={`form-group checkbox-group ${
                errors.agree && touched.agree ? "invalid" : ""
              }`}
            >
              <Field
                name="agree"
                type="checkbox"
                id="agree"
                className="form-checkbox"
              />
              <label htmlFor="agree">
                I agree to the processing of my data according to the Privacy
                Policy.
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
