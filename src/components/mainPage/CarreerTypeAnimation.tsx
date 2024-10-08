"use client";

import { TypeAnimation } from "react-type-animation";
import styles from "@/styles/home/carreer.module.scss";

export default function CarreerTypeAnimation() {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={["Data analyst", 2000, "Mechanical engineer", 2000]}
      repeat={Infinity}
      className={styles.carreer}
    />
  );
}
