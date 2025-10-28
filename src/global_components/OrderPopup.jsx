"use client";
import React, { useMemo } from "react";
import Link from "next/link";
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
  const { orderPopupDisplay, setOrderPopupDisplay, serviceValue } = usePopup();

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
    "Taiwan",
  ];

  const options = useMemo(() => {
    const allCountries = countryList().getData();
    return allCountries.filter(
      (country) => !excludedCountries.includes(country.label)
    );
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("This field is required."),
    lastName: Yup.string().required("This field is required."),
    company: Yup.string().required("This field is required."),
    email: Yup.string()
      .email("Please provide a valid email address.")
      .required("This field is required."),
    phone: Yup.string().required("This field is required."),
    country: Yup.string().required("This field is required."),
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
    message: "",
    agreement: false,
  };

  const closePopup = (resetForm) => {
    setOrderPopupDisplay(false);
    if (resetForm) {
      resetForm();
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setStatus }
  ) => {
    const valuesWithService = {
      ...values,
      solution: serviceValue,
    };

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(valuesWithService),
      });

      if (response.ok) {
        setSubmitting(false);
        resetForm();
        setStatus({ success: true });
      } else {
        setStatus({ success: false });
      }
    } catch (error) {
      setStatus({ success: false });
      setSubmitting(false);
    }
  };

  return (
    <div className={`order-popup-wrap ${orderPopupDisplay ? "opened" : ""}`}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          touched,
          errors,
          resetForm,
          setFieldValue,
          values,
        }) => (
          <div>
            <div
              className="overlay"
              onClick={() => closePopup(resetForm)}
            ></div>
            <div className="popup-inner">
              <div className="popup-top">
                <h2>{serviceValue} Request</h2>
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
                          touched.firstName && errors.firstName ? "invalid" : ""
                        }
                      />
                    </div>

                    <div>
                      <Field
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        className={
                          touched.lastName && errors.lastName ? "invalid" : ""
                        }
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
                    </div>

                    <div>
                      <Select
                        name="country"
                        options={options}
                        styles={{
                          control: (provided, state) => ({
                            ...provided,
                            border: "none", // Убираем бордеры
                            boxShadow: "none", // Убираем тени
                            borderRadius: "16px", // Скруглённые углы
                            padding: "0 10px", // Внутренние отступы
                            fontSize: "16px",
                            maxHeight: "48px", // Высота общего контейнера
                            backgroundColor: "#fff", // Светлый фон
                            "&:hover": {
                              borderColor: "none", // Убираем ховер-бордер
                            },
                          }),
                          input: (provided) => ({
                            ...provided,
                            height: "48px", // Высота поля ввода
                            margin: "0",
                            padding: "0",
                          }),
                          placeholder: (provided) => ({
                            ...provided,
                            color: "#444444", // Цвет плейсхолдера
                            fontSize: "16px",
                          }),
                          singleValue: (provided) => ({
                            ...provided,
                            color: "#333", // Цвет выбранного значения
                          }),
                          dropdownIndicator: (provided) => ({
                            ...provided,
                            color: "#444444", // Цвет индикатора
                            "&:hover": {
                              color: "#444444", // Убираем ховер на индикаторе
                            },
                          }),
                          indicatorSeparator: () => ({
                            display: "none", // Убираем разделитель
                          }),
                          menu: (provided) => ({
                            ...provided,
                            backgroundColor: "#fff", // Белый фон выпадающего списка
                            border: "none", // Убираем бордер
                            borderRadius: "16px", // Скруглённые углы
                            marginTop: "5px",
                          }),
                          menuList: (provided) => ({
                            ...provided,
                            padding: "5px",
                          }),
                          option: (provided, state) => ({
                            ...provided,
                            backgroundColor: state.isSelected
                              ? "#47B782" // Зелёный фон для выбранного
                              : state.isFocused
                              ? "#47B782" // Светло-зелёный при наведении
                              : "#fff", // Белый фон по умолчанию
                            color: state.isSelected ? "#fff" : "#333", // Цвет текста
                            padding: "10px", // Отступы внутри
                            borderRadius: "16px", // Скруглённые углы для элементов
                            cursor: "pointer",
                            "&:hover": {
                              backgroundColor: "#47B782", // Светло-зелёный ховер
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
                        value={options.find(
                          (option) => option.value === values.country
                        )}
                      />

                      {/* <ErrorMessage name="country" component="div" className="error" /> */}
                    </div>

                    <div>
                      <PhoneInput
                        country={countryCode}
                        value={values.phone}
                        onChange={(value) => setFieldValue("phone", value)}
                        placeholder="Phone"
                        className={
                          touched.phone && errors.phone ? "invalid" : ""
                        }
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

                    <div
                      className={`full checkbox ${
                        touched.agreement && errors.agreement ? "invalid" : ""
                      }`}
                    >
                      <label>
                        <Field type="checkbox" name="agreement" />
                        <span>
                          <CheckboxIcon />
                          <span>
                            I agree to the processing of my data according to
                            the{" "}
                            <Link href="/privacy-policy">Privacy Policy</Link>.
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

                    {Object.keys(errors).length > 0 && (
                      <div className="submit-error">
                        This field is required.
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default RequestPopup;
