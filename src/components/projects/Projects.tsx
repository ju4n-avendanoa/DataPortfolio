"use client";

import { useRef } from "react";
import styles from "@/styles/projects/projects.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import ImageWithFallback from "../ImageWithFallback";
import Button from "./Button";
import { FaGithub } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";

const items = [
  {
    id: 1,
    title: "Olympic Games Data Analysis",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1724258803/data/DALL_E_2024-08-21_11.46.33_-_A_clean_and_modern_image_focusing_on_a_single_large_Olympic_ring_specifically_the_middle_ring_representing_the_Olympic_Games._The_background_should_aczgms.webp",
    desc: "This project conducts an exploratory data analysis of the Olympic Games using Python and libraries such as Pandas, Matplotlib, and Seaborn. It examines the distribution of medals by country, the evolution of female participation, and the relationship between athletes' physical characteristics and their sports. The analysis also covers variations in medalists' ages, the inclusion of new sports, and performance differences by gender. The goal is to derive meaningful insights into success and participation in the Olympic Games over time.",
    github: "https://github.com/ju4n-avendanoa/Data_Olympics",
    productionLink: "https://worldbnb.vercel.app",
  },
  {
    id: 2,
    title: "Bank Churn Data Analysis",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1724259817/data/DALL_E_2024-08-21_12.03.10_-_A_conceptual_image_representing_a_bank_money_and_customers._The_image_should_include_visual_elements_like_a_bank_building_stacks_of_money_and_silh_pzx72m.webp",
    desc: "In this project, a dataset is analyzed to understand the factors that may influence customer churn at a bank. Key characteristics such as financial behavior, bank activity, and demographic attributes of customers are examined to identify patterns related to their decision to leave the bank. Through visualization techniques, the project aims to gain deeper insights into these factors and provide valuable information that can help improve customer retention.",
    github: "https://github.com/ju4n-avendanoa/Bank_Churn",
    productionLink: "https://my-task-organizer.vercel.app",
  },
  {
    id: 3,
    title: "Nextflix Data Analysis",
    img: "https://res.cloudinary.com/dhjqarghy/image/upload/v1724264545/data/Netflix-Logo_ir4jcf.jpg",
    desc: "This project analyzes a dataset of Netflix titles with the aim of understanding the characteristics and patterns of the movies and shows available on the platform. Key aspects such as release year, duration, age ratings, and content categories are explored. Through visualization techniques, the project seeks to gain deeper insights into trends within Netflix's catalog, providing valuable information that could help better understand the content offerings and audience preferences.",
    github: "https://github.com/ju4n-avendanoa/Data_Netflix",
    productionLink: "https://footballresults.vercel.app",
  },
];

const Project = ({ item }: { item: any }) => {
  const ref = useRef(null);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 0.75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
          className={styles.imageContainer}
          ref={ref}
        >
          <ImageWithFallback
            src={item.img}
            alt="project-picture"
            width={1000}
            height={1000}
            fallbackSrc=""
          />
        </motion.div>
        <motion.div
          className={styles.textContainer}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.25 }}
          viewport={{ once: true }}
        >
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <div className={styles.buttons}>
            <Button text="GitHub" icon={<FaGithub />} link={item.github} />
            {/* <Button
              text="Live"
              icon={<BsLink45Deg />}
              link={item.productionLink}
            /> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className={styles.portfolio} ref={ref}>
      <div className={styles.progress}>
        <h1>Projects</h1>
        <motion.div
          style={{ scaleX }}
          className={styles.progressBar}
        ></motion.div>
      </div>
      {items.map((item) => (
        <Project item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
