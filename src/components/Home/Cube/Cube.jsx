import React from "react";
import styles from "./Cube.module.scss";
import { SiHtml5, SiCss3, SiReact, SiAngular } from "react-icons/si";
import { DiSass, DiJavascript1 } from "react-icons/di";
const Cube = () => {
  return (
    <div className={styles.cube}>
      <div className={`${styles.side} ${styles.front}`}>
        <SiHtml5 className={styles.icon} />
      </div>
      <div className={`${styles.side} ${styles.back}`}>
        <SiCss3 className={styles.icon} />
      </div>
      <div className={`${styles.side} ${styles.right}`}>
        <SiReact className={styles.icon} />
      </div>
      <div className={`${styles.side} ${styles.left}`}>
        <SiAngular className={styles.icon} />
      </div>

      <div className={`${styles.side} ${styles.top}`}>
        <DiSass className={styles.icon} />
      </div>
      <div className={`${styles.side} ${styles.bottom}`}>
        <DiJavascript1 className={styles.icon} />
      </div>
    </div>
  );
};
export default Cube;