import React from "react";
import styled from "styled-components";
import { Marginer } from "../marginer";
import Swal from "sweetalert2";

// import NikeImg from "../../assets/images/nike-logo.png";
// import { BsFillAspectRatioFill } from "react-icons/bs";
import pokebola from "../../assets/images/55.gif";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2.5em 6px 0 6px;
  line-height: 1.4;
`;

const MediumText = styled.span`
  font-size: 25px;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
`;

const SmallText = styled.span`
  font-size: 15px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
`;

const SpacedHorizontalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BuyButton = styled.button`
  padding: 5px 5px;
  background-color: #fbbe01;
  color: #000;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 700;
  border: 3px solid transparent;
  outline: none;
  cursor: pointer;
  transition: all 290ms ease-in-out;
  border-radius: 8px;

  &:hover {
    background-color: transparent;
    color: #fff;
    border: 3px solid #fbbe01;
  }
`;

const CajonBajo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 53px;
    /* margin: 5px; */
  }
`;

export function PokeDetails({ pokeData }) {
  function handlerClick() {
    console.log(pokeData);

    Swal.fire({
      title: `#0${pokeData.id} ${pokeData.name}`,
      text: "Modal with a custom image.",
      imageUrl: pokeData.sprites.other.dream_world.front_default,
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  }

  let tipos = pokeData.types.map((el) => el.type.name).join(" - ");

  return (
    <DetailsContainer>
      {pokeData ? (
        <MediumText>{pokeData.name}</MediumText>
      ) : (
        <MediumText>-</MediumText>
      )}
      <SpacedHorizontalContainer>
        {/*<MediumText>AIR JORDAN 1 MID SE GC</MediumText>*/}
        <MediumText>{"# " + pokeData.id}</MediumText>
      </SpacedHorizontalContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <SpacedHorizontalContainer>
        {pokeData ? (
          <SmallText>Tipe: {tipos}</SmallText>
        ) : (
          <MediumText>-</MediumText>
        )}

        <BuyButton onClick={() => handlerClick()}>See +</BuyButton>
      </SpacedHorizontalContainer>
      <CajonBajo>
        {/*PONER LAS EVOLUCIONES ACA*/}
        <img src={pokebola} alt="" />
      </CajonBajo>
    </DetailsContainer>
  );
}
