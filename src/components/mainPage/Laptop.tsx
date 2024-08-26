"use client";

import { motion } from "framer-motion";
import CarreerTypeAnimation from "./CarreerTypeAnimation";
import styles from "@/styles/home/home.module.scss";
import Photo from "./Photo";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Laptop() {
  return (
    <motion.section
      variants={textVariants}
      initial="initial"
      animate="animate"
      className={styles.laptop}
    >
      <div className={styles.text}>
        <motion.div
          className={styles.name}
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 variants={textVariants}>Hi, I&apos;m Juan</motion.h1>
          <CarreerTypeAnimation />
        </motion.div>
        <motion.p className={styles.intro} variants={textVariants}>
          Welcome to my portfolio, I am a Data Analyst with 15 months of
          experience specializing in transforming data into strategic insights.
          My passion for data analysis drives me to create impactful solutions.
          <br />
          <br />
          Letd&apos;s collaborate on data-driven projects or simply connect.
          Id&apos;m here to make data work for you!
        </motion.p>
      </div>
      <Photo />
    </motion.section>
  );
}

export default Laptop;
