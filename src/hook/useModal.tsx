"use client";

import { useContext } from "react";

import { ModalContext, ModalProps } from "@/context/modal";

const useModal = (): ModalProps => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export { useModal };
