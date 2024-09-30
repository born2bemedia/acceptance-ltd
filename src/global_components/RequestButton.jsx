"use client";
import React from "react";
import { usePopup } from "@/contexts/PopupsContext";
import { ButtonIcon } from "./Icons";

function RequestButton({ text }) {
  const { setRequestPopupDisplay } = usePopup();

  const orderPopupOpen = () => {
    setRequestPopupDisplay(true);
  };
  return (
    <>
      <button className="button fadeInUp" onClick={() => orderPopupOpen()}>
        <span>{text ? text : "Get a Consultation"}</span>
        <ButtonIcon />
      </button>
    </>
  );
}

export default RequestButton;
