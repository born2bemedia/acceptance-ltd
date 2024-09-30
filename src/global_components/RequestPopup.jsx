"use client";
import React, { useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/contexts/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import countryList from "react-select-country-list"; // Import the country list
import { ButtonIcon, CheckboxIcon } from "./Icons";

function RequestPopup() {
  const {
    requestPopupDisplay,
    setRequestPopupDisplay,
    popupTitle,
    popupSubtitle,
  } = usePopup();

  const countryCode = useCountryCode();
  const options = useMemo(() => countryList().getData(), []); // Generate country list options

  const solutions = [
    {
      value: "Compliance & Legal Services",
      label: "Compliance & Legal Services",
    },
    { value: "Company Formation", label: "Company Formation" },
    { value: "Bank Account Opening", label: "Bank Account Opening" },
    { value: "Financial Advisory", label: "Financial Advisory" },
    { value: "Underwriting", label: "Underwriting" },
    { value: "Accounting Services", label: "Accounting Services" },
    { value: "Compliance Monitoring", label: "Compliance Monitoring" },
    { value: "Tax Reporting", label: "Tax Reporting" },
    { value: "Document Management", label: "Document Management" },
    {
      value: "Company Closure Assistance",
      label: "Company Closure Assistance",
    },
    {
      value: "Dispute Resolution with Financial Institutions",
      label: "Dispute Resolution with Financial Institutions",
    },
    {
      value: "Director and Responsible Person Support",
      label: "Director and Responsible Person Support",
    },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      width: "100%",
      color: "#0d0d0d",
      height: "50px",
      borderRadius: "100px",
      background: "#FFFFFF",
      border: state.isFocused ? "1px solid #FFFFFF" : "1px solid #FFFFFF",
      fontSize: "16px",
      fontWeight: "400",
      lineHeight: "1.2",
      textAlign: "left",
      padding: "0 24px",
      boxShadow: "unset",
      "&:hover": {
        borderColor: "#FFFFFF",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "48px",
      margin: "0",
      padding: "0",
      border: "none",
    }),
    input: (provided) => ({
      ...provided,
      height: "48px",
      margin: "0",
      padding: "0",
      border: "none",
      color: "#0d0d0d",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#0d0d0d",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      "> span": {
        display: "none",
      },
      "> div": {
        padding: "0",
        width: "13px",
        height: "13px",
        backgroundImage: "url(/images/selectArrow.svg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      },
      "> div > svg": {
        display: "none",
      },
    }),
    indicatorContainer: (provided) => ({
      ...provided,
      padding: "0",
    }),
    menu: (provided) => ({
      ...provided,
      background: "#ffffff0d",
    }),
    option: (provided, state) => ({
      ...provided,
      background: state.isSelected ? "#fff" : "#fff",
      color: "#0d0d0d",
      "&:hover": {
        background: "#08AC34",
      },
    }),
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    company: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    country: Yup.string().required("This field is required."),
    solution: Yup.string().required("This field is required."),
    message: Yup.string(),
    agreement: Yup.bool().oneOf(
      [true],
      "You must agree to the privacy policy."
    ),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    solution: "",
    message: "",
    agreement: false,
  };

  const closePopup = (resetForm) => {
    setRequestPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    setSubmitting(false);
    resetForm();
    setStatus({ success: true });
  };

  return (
    <div
      className={`request-popup-wrap ${requestPopupDisplay ? "opened" : ""}`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          status,
          touched,
          errors,
          resetForm,
          setFieldValue,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              {status && status.success ? (
                <div className="thanks-message full">
                  <h2>Thank You for Your Submission! </h2>
                  <span>
                    Your request has been received. Our team will review it and
                    contact you shortly. If you have any questions, feel free to
                    reach out.
                    <br /><br />
                    We look forward to assisting you!
                  </span>
                </div>
              ) : (
                <>
                  <div className="popup-top">
                    <h2>Contact Us</h2>
                    <img
                      src="/images/closePopup.svg"
                      className="popup-close"
                      alt="popup-close"
                      onClick={() => closePopup(resetForm)}
                    />
                  </div>
                  <div>
                    <div className="request-form">
                      <Form>
                        <div>
                          <Field
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            className={
                              touched.firstName && errors.firstName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            className={
                              touched.lastName && errors.lastName
                                ? "invalid"
                                : ""
                            }
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="company"
                            type="text"
                            placeholder="Company"
                            className={
                              touched.company && errors.company ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="company"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Field
                            name="email"
                            type="email"
                            placeholder="Corporate Email"
                            className={
                              touched.email && errors.email ? "invalid" : ""
                            }
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <Select
                            name="country"
                            options={options} // Use country options from react-select-country-list
                            styles={customStyles}
                            className={`form-field ${
                              touched.country && errors.country ? "invalid" : ""
                            }`}
                            onChange={(option) =>
                              setFieldValue("country", option.value)
                            }
                            placeholder="Country"
                          />
                          <ErrorMessage
                            name="country"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div>
                          <PhoneInput
                            country={countryCode}
                            value=""
                            onChange={(value) => setFieldValue("phone", value)}
                            placeholder="Phone"
                            className={
                              touched.phone && errors.phone ? "invalid" : ""
                            }
                          />
                          <ErrorMessage name="phone" component="span" />
                        </div>

                        <div className="full">
                          <Select
                            name="solution"
                            options={solutions}
                            styles={customStyles}
                            className={`form-field ${
                              touched.solution && errors.solution
                                ? "invalid"
                                : ""
                            }`}
                            onChange={(option) =>
                              setFieldValue("solution", option.value)
                            }
                            placeholder="Solution"
                          />
                          <ErrorMessage
                            name="solution"
                            component="div"
                            className="error"
                          />
                        </div>

                        <div className="full">
                          <Field
                            name="message"
                            as="textarea"
                            placeholder="Message"
                            className="small"
                          />
                        </div>

                        <div className="full checkbox">
                          <label>
                            <Field type="checkbox" name="agreement" />
                            <span>
                              <CheckboxIcon />
                              <span>
                                I agree to the processing of my data according
                                to the Privacy Policy.
                              </span>
                            </span>
                          </label>
                          <ErrorMessage
                            name="agreement"
                            component="div"
                            className="error"
                          />
                        </div>

                        <button
                          type="submit"
                          className="button"
                          disabled={isSubmitting}
                        >
                          <span>Submit</span>
                          <ButtonIcon />
                        </button>
                      </Form>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestPopup;
