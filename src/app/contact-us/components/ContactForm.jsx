"use client";
import React, { useMemo } from "react";
import { Formik, Form, Field } from "formik";
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
        setStatus("Your message has been sent successfully!");
        resetForm();
      } else {
        const { error } = await response.json();
        setStatus(error || "Failed to send your message. Please try again.");
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
      {({ setFieldValue, values, errors, touched, isSubmitting, status }) => (
        <Form className="contact-form">
          <div>
            <Field name="firstName" type="text" placeholder="First Name" />
          </div>
          <div>
            <Field name="lastName" type="text" placeholder="Last Name" />
          </div>
          <div>
            <Field name="company" type="text" placeholder="Company" />
          </div>
          <div>
            <Field name="email" type="email" placeholder="Email" />
          </div>
          <div>
            <Select
              options={countries}
              onChange={(selectedOption) => setFieldValue("country", selectedOption.label)}
              value={countries.find((option) => option.label === values.country)}
              placeholder="Country"
            />
          </div>
          <div>
            <PhoneInput
              country="us"
              value={values.phone}
              onChange={(phone) => setFieldValue("phone", phone)}
            />
          </div>
          <div>
            <Field name="message" as="textarea" placeholder="Message" />
          </div>
          <div>
            <Field name="agree" type="checkbox" id="agree" />
            <label htmlFor="agree">I agree to the Privacy Policy.</label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          {status && <div className="form-status">{status}</div>}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
