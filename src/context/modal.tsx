"use client";

import { useCallback, useState, createContext, ReactNode } from "react";

import Modal from "@/components/Modal";

interface ModalConfig {
  title?: string;
}

export interface ModalProps {
  closeModal: () => void;
  // eslint-disable-next-line no-unused-vars
  openModal: (content: ReactNode, config?: ModalConfig) => void;
}

export const ModalContext = createContext<ModalProps>({} as ModalProps);
const initialModalConfig: ModalConfig = {};

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modal, setModal] = useState<ReactNode | null>(null);
  const [modalConfig, setModalConfig] =
    useState<ModalConfig>(initialModalConfig);

  const closeModal = useCallback(() => {
    setModal(null);
    setModalConfig(initialModalConfig);
  }, []);

  const openModal = useCallback(
    (content: ReactNode, config: ModalConfig = initialModalConfig) => {
      setModal(content);
      setModalConfig(config);
    },
    [setModal, setModalConfig],
  );

  return (
    <ModalContext.Provider value={{ closeModal, openModal }}>
      {children}
      {modal && (
        <Modal closeModal={closeModal} {...modalConfig}>
          {modal}
        </Modal>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
