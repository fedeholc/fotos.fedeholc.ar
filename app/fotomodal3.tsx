"use client";
import Image from "next/image";
import { useState, ReactNode } from "react";
type Props = {
  children: ReactNode;
};

export default function FotoModal3({ children }: Props) {
  const [showModal, setShowModal] = useState("no_modal");

  function handleModal() {
    if (showModal === "no_modal") {
      setShowModal("modal");
    } else {
      setShowModal("no_modal");
    }
  }
  return (
    <>
      <div className={`${showModal}`} onClick={handleModal}>
        {children}
      </div>
    </>
  );
}
