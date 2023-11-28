import { useEffect } from "react";
import { IoClose } from "react-icons/io5";

import * as S from "./style";

interface Props {
  title?: string;
  children: React.ReactNode;
  closeModal: () => void;
}

export default function Modal({ title, children, closeModal }: Props) {
  useEffect(() => {
    const keyListener = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      closeModal();
    };

    document.addEventListener("keyup", keyListener);
    document.body.style.setProperty("overflow", "hidden");

    return () => {
      document.body.style.setProperty("overflow", "");
      document.removeEventListener("keyup", keyListener);
    };
  }, [closeModal]);

  return (
    <S.ModalWrapper>
      <S.Fade onClick={closeModal} />
      <S.Modal>
        <S.Header>
          <S.Button color="secondary" onClick={closeModal}>
            <IoClose />
          </S.Button>
          {!title ? null : <S.Title>{title}</S.Title>}
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.Modal>
    </S.ModalWrapper>
  );
}
