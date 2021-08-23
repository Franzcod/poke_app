import React from "react";
import styles from "../Game/GamePage.module.css";
import CardQ from "../Game/CardQ/CardQ";
// import OptionsButton from "../Home/OptionsButton/OptionsButton";

export function GamePage() {
  return (
    <div className={styles.divRey}>
      <div className={styles.contMayor}>
        <CardQ />
      </div>
    </div>
  );
}

export default GamePage;
