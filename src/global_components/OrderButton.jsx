"use client";
import React from "react";
import { usePopup } from "@/contexts/PopupsContext";
import { ButtonIcon } from "./Icons";

function OrderButton({ text, serviceName, type }) {
  const {
    setOrderPopupDisplay,
    setServiceValue,
    setPopupTitle,
    setPopupSubtitle,
  } = usePopup();

  const orderPopupOpen = () => {
    setServiceValue(serviceName);
    setOrderPopupDisplay(true);
  };
  return (
    <>
      <button className="button" onClick={() => orderPopupOpen()}>
        <span>{text ? text : "Request a Solution"}</span>
        <ButtonIcon />
      </button>
    </>
  );
}

export default OrderButton;
