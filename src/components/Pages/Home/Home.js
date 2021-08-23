import React from "react";
import { PokeCard } from "../../Card/index.jsx";
import styles from "./Home.module.css";
const Home = () => {
  return (
    <div className={styles.divRey}>
      <PokeCard />
    </div>
  );
};

export default Home;
