import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import imgLoading from "../../assets/images/55.gif";

// import AirJordanImg from "../../assets/images/air-jordan-transparent.png";
import { PokeDetails } from "./PokeDetails";
import colorType from "../../utils.js";
import styles from "./index.module.css";

import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  /* background-color: black; */
  color: #fff;
  position: relative;
  cursor: grab;
`;

const Shoes = styled(motion.div)`
  width: auto;
  height: 200px;
  /* max-width: 100px; */
  z-index: 99;
  user-select: none;
  margin-right: 3em;
  margin-top: 4em;

  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;

export function NikeCard() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [color, setColor] = useState("grey");
  const [loading, setLoading] = useState(true);
  const [numeroDePokemon, setNumeroDePokemon] = useState(1);

  function handlerClick(e) {
    e === "right"
      ? setNumeroDePokemon(numeroDePokemon + 1)
      : setNumeroDePokemon(numeroDePokemon - 1);
    // console.log(numeroDePokemon);
  }

  const getPokemon = async () => {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${numeroDePokemon}`
    );
    const data = await res.json();
    // console.log(data);

    let colorin = colorType(data.types[0].type.name);

    setColor(colorin);

    setAllPokemons(data);

    setLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [numeroDePokemon]); // eslint-disable-next-line

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div className={styles.CardWrapper}>
      <IoIosArrowDropleft
        className={styles.arowButton}
        onClick={() => handlerClick("left")}
      />

      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <div className={styles.TopContainer}>
          <div className={styles.CircleWrapper}>
            <div className={styles.Circle} style={{ backgroundColor: color }} />
          </div>
          <div className={styles.Wrapper}>
            <Shoes
              style={{ x, y, rotateX, rotateY, rotate: "-5deg", z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            >
              {loading ? (
                <img src={imgLoading} alt="img pokemon" />
              ) : (
                <img
                  src={allPokemons.sprites.other.dream_world.front_default}
                  alt="img pokemon"
                />
              )}
            </Shoes>
          </div>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <div className={styles.Text_1}>{allPokemons.name}</div>
          )}
        </div>
        <div className={styles.BottomContainer}>
          {loading ? (
            <p>Cargando...</p>
          ) : (
            <PokeDetails pokeData={allPokemons} />
          )}
        </div>
      </CardContainer>
      <IoIosArrowDropright
        className={styles.arowButton}
        onClick={() => handlerClick("right")}
      />
    </div>
  );
}
