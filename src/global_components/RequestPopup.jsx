"use client";
import React, { useMemo } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { usePopup } from "@/contexts/PopupsContext";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import Select from "react-select";
import useCountryCode from "@/utils/useCountryCode";
import countryList from "react-select-country-list";
import { ButtonIcon, CheckboxIcon } from "./Icons";
import Link from "next/link";

function RequestPopup() {
  const {
    requestPopupDisplay,
    setRequestPopupDisplay,
    popupTitle,
    popupSubtitle,
  } = usePopup();

  const countryCode = useCountryCode();

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
    "Taiwan, Province of China",
  ];

  const options = useMemo(() => {
    const allCountries = countryList().getData();
    return allCountries.filter(
      (country) => !excludedCountries.includes(country.label)
    );
  }, []);

  const solutions = [
    {
      value: "Jurisdiction Selection for Company Registration",
      label: "Jurisdiction Selection for Company Registration",
    },
    {
      value: "Company Setup and Documentation",
      label: "Company Setup and Documentation",
    },
    {
      value: "Nominee Service",
      label: "Nominee Service",
    },
    {
      value: "Business Address Setup",
      label: "Business Address Setup",
    },
    {
      value: "Banking Services",
      label: "Banking Services",
    },
    {
      value: "Accounting & Audit Services",
      label: "Accounting & Audit Services",
    },
    {
      value: "Company Management",
      label: "Company Management",
    },
    {
      value: "Company Liquidation",
      label: "Company Liquidation",
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
    try {
      const response = await fetch("/api/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setTimeout(() => {
          setSubmitting(false);
          resetForm();
          setStatus({ success: true });
        }, 400);
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      //console.error(error);
      setStatus({ success: false });
      setSubmitting(false);
    }
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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    <rect width="64" height="64" rx="8" fill="#E7E7E7" />
                    <path
                      d="M18.3079 20.9272C18.1668 25.0731 22.7206 30.5123 25.4555 32.5658C28.8161 31.9336 35.3059 29.068 37.0127 25.2869C37.6689 23.8322 37.6935 22.2867 37.081 21.0464C36.5117 19.8947 35.4431 19.0842 34.0721 18.7649C31.1042 18.0714 28.7948 20.3732 28.7718 20.3962C28.6378 20.5324 28.4431 20.5887 28.2566 20.5449C28.0707 20.5012 27.9214 20.3639 27.8618 20.1829C27.8514 20.1528 26.7976 17.0685 23.8291 16.3772C23.443 16.287 23.0613 16.2427 22.6895 16.2427C21.7406 16.2427 20.8547 16.5325 20.1213 17.0942C19.0237 17.9358 18.3626 19.3331 18.3084 20.9278L18.3079 20.9272Z"
                      fill="#47B782"
                    />
                    <path
                      d="M39.2861 46.7641C41.676 45.6934 45.9312 42.4805 46.535 39.4207C46.7652 38.2559 46.524 37.1342 45.8738 36.3429C45.2717 35.6106 44.3666 35.207 43.3248 35.207C41.0585 35.207 39.7663 37.2693 39.7537 37.2906C39.6542 37.4525 39.4775 37.552 39.2872 37.552C39.1073 37.5537 38.9181 37.453 38.8191 37.2895C38.8076 37.2698 37.5142 35.207 35.2485 35.207C34.2067 35.207 33.3011 35.6101 32.6996 36.3429C32.0493 37.1342 31.8082 38.2559 32.0384 39.4202C32.6022 42.2787 36.5638 45.5555 39.2867 46.7636L39.2861 46.7641Z"
                      fill="#47B782"
                    />
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
                  <img
                    src="/images/closePopup.svg"
                    className="popup-close"
                    alt="popup-close"
                    onClick={() => closePopup(resetForm)}
                  />
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
                          {/* <ErrorMessage
                            name="firstName"
                            component="div"
                            className="error"
                          /> */}
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
                          {/* <ErrorMessage
                            name="lastName"
                            component="div"
                            className="error"
                          /> */}
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
                          {/* <ErrorMessage
                            name="company"
                            component="div"
                            className="error"
                          /> */}
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
                          {/* <ErrorMessage
                            name="email"
                            component="div"
                            className="error"
                          /> */}
                        </div>

                        <div>
                          <Select
                            name="country"
                            options={options} // Use country options from react-select-country-list
                            styles={{
                              control: (provided, state) => ({
                                ...provided,
                                border: "none",
                                boxShadow: "none",
                                borderRadius: "16px",
                                padding: "0 10px",
                                fontSize: "16px",
                                maxHeight: "48px",
                                backgroundColor: "#fff",
                                "&:hover": {
                                  borderColor: "none",
                                },
                              }),
                              input: (provided) => ({
                                ...provided,
                                height: "48px",
                                margin: "0",
                                padding: "0",
                              }),
                              placeholder: (provided) => ({
                                ...provided,
                                color: "#444444",
                                fontSize: "16px",
                              }),
                              singleValue: (provided) => ({
                                ...provided,
                                color: "#333",
                              }),
                              dropdownIndicator: (provided) => ({
                                ...provided,
                                color: "#444444",
                                "&:hover": {
                                  color: "#444444",
                                },
                              }),
                              indicatorSeparator: () => ({
                                display: "none",
                              }),
                              menu: (provided) => ({
                                ...provided,
                                backgroundColor: "#fff",
                                border: "none",
                                borderRadius: "16px",
                                marginTop: "5px",
                              }),
                              menuList: (provided) => ({
                                ...provided,
                                padding: "5px",
                              }),
                              option: (provided, state) => ({
                                ...provided,
                                backgroundColor: state.isSelected
                                  ? "#47B782"
                                  : state.isFocused
                                  ? "#47B782"
                                  : "#fff",
                                color: state.isSelected ? "#fff" : "#333",
                                padding: "10px",
                                borderRadius: "16px",
                                cursor: "pointer",
                                "&:hover": {
                                  backgroundColor: "#47B782",
                                },
                              }),
                            }}
                            className={`form-field ${
                              touched.country && errors.country ? "invalid" : ""
                            }`}
                            onChange={(option) =>
                              setFieldValue("country", option.value)
                            }
                            placeholder="Country"
                          />
                          {/* <ErrorMessage
                            name="country"
                            component="div"
                            className="error"
                          /> */}
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
                          {/* <ErrorMessage name="phone" component="span" /> */}
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
                          {/* <ErrorMessage
                            name="solution"
                            component="div"
                            className="error"
                          /> */}
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
                                to the <Link href="/privacy-policy" target="_blank">Privacy Policy</Link>.
                              </span>
                            </span>
                          </label>
                          {/* <ErrorMessage
                            name="agreement"
                            component="div"
                            className="error"
                          /> */}
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
