"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";
import styles from "@/styles/assets/assets.module.scss";

const colors = ["#8A2BE2", "#FF007F", "#4682B4", "#3CB371"];

type Props = {
  buttonName: string;
  icon: any;
  link: string;
};

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

function DownloadButton({ buttonName, icon, link }: Props) {
  const color = useMotionValue(colors[0]);

  useEffect(() => {
    animate(color, colors, {
      ease: "easeInOut",
      duration: 6,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <a href={link} className={styles.buttons} target="_blank">
      <motion.button
        variants={variants}
        initial="initial"
        animate="animate"
        style={{
          border,
          boxShadow,
        }}
      >
        <span>{buttonName}</span>
        {icon}
      </motion.button>
    </a>
  );
}

export default DownloadButton;
