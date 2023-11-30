"use client";

import React from "react";
import { IoBeer } from "react-icons/io5";

import BeerForm from "@/components/BeerForm";
import Button from "@/components/Button";
import { useBeerAPI } from "@/hook/useBeerAPI";
import { useModal } from "@/hook/useModal";
import { IBeerForm } from "@/types/beer";

import * as S from "./style";

export default function NavBar() {
  const { openModal, closeModal } = useModal();
  const { createBeer } = useBeerAPI();
  const handleCreateBeer = (beer: IBeerForm) =>
    createBeer(beer).then(closeModal);

  return (
    <S.Navbar>
      <div>
        <S.Title>Beer Collection</S.Title>
      </div>
      <S.Nav>
        <li>
          <Button
            color="secondary"
            onClick={() =>
              openModal(<BeerForm onSubmit={handleCreateBeer} />, {
                title: "New Beer",
              })
            }
          >
            Add Beer <IoBeer />
          </Button>
        </li>
      </S.Nav>
    </S.Navbar>
  );
}
