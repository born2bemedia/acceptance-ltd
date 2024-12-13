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
  const closeSuccessMessage = () => setSubmissionStatus(null);

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
          <svg
            className="close-message"
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            onClick={closeSuccessMessage}
          >
            <path fill-rule="evenodd" clip-rule="evenodd" d="M23.9993 25.4141L29.6563 31.0711C29.8449 31.2533 30.0975 31.3541 30.3597 31.3518C30.6219 31.3495 30.8727 31.2444 31.0582 31.059C31.2436 30.8736 31.3487 30.6227 31.351 30.3606C31.3533 30.0984 31.2525 29.8458 31.0703 29.6571L25.4133 24.0001L31.0703 18.3431C31.2525 18.1545 31.3533 17.9019 31.351 17.6397C31.3487 17.3776 31.2436 17.1267 31.0582 16.9413C30.8727 16.7559 30.6219 16.6508 30.3597 16.6485C30.0975 16.6462 29.8449 16.747 29.6563 16.9291L23.9993 22.5861L18.3423 16.9291C18.1529 16.7515 17.9017 16.6545 17.6421 16.6587C17.3824 16.6629 17.1345 16.768 16.9509 16.9517C16.7674 17.1355 16.6625 17.3834 16.6584 17.6431C16.6544 17.9028 16.7515 18.1538 16.9293 18.3431L22.5853 24.0001L16.9283 29.6571C16.8328 29.7494 16.7566 29.8597 16.7042 29.9817C16.6518 30.1037 16.6242 30.235 16.6231 30.3677C16.6219 30.5005 16.6472 30.6322 16.6975 30.7551C16.7478 30.878 16.822 30.9897 16.9159 31.0835C17.0098 31.1774 17.1215 31.2517 17.2444 31.302C17.3673 31.3523 17.499 31.3776 17.6317 31.3764C17.7645 31.3752 17.8957 31.3477 18.0177 31.2953C18.1397 31.2428 18.2501 31.1667 18.3423 31.0711L23.9993 25.4141Z" fill="#E7E7E7"/>
          </svg>
          
          <h2>Thank You for Your Submission! </h2>
          <span>
            Your request has been received. Our team will review it and contact
            you shortly.
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

            {Object.keys(errors).length > 0 && (
              <div className="general-error-message">
                This field is required.
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
