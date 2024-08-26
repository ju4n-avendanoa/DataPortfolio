"use client";

import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TimelineDot } from "@mui/lab";
import { createTheme } from "@mui/material/styles";
import { FaDatabase } from "react-icons/fa6";
import { CalculatorIcon } from "@heroicons/react/24/outline";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import ExperienceCard from "./ExperienceCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import Timeline from "@mui/lab/Timeline";
import iconStyles from "@/styles/about/iconTimeline.module.scss";
import styles from "@/styles/about/timeline.module.scss";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xxl: true;
  }
}

function TimelineComponent() {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 376,
        md: 768,
        lg: 1025,
        xl: 1441,
        xxl: 2561,
      },
    },
  });
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Timeline
      className={styles.timeline}
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          ...(isMobile && {
            flex: 0,
            padding: 0,
          }),
        },
      }}
      position={isLaptop ? "alternate" : undefined}
    >
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <FaDatabase className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector1}`}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Data Analyst"
            company="Grupo UMA"
            date="June 2022 - December 2023"
            description="I supported the Corporate Audit Department across the six countries where Grupo UMA operates, conducting data analysis for various departments within the company. This included extracting, cleaning, and analyzing data from databases using tools such as SQL, SAP, SAC, and ACL Analytics. I developed and implemented dashboards for continuous monitoring in key areas such as manufacturing, production, payments, inventory management, and accounts payable."
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <HiMiniComputerDesktop className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector2}`}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Data Analyst"
            company="Libana Mar SAS"
            date="October 2023 - June 2024"
            description="I was responsible for extracting sales information from platforms such as Shopify and Dropi, as well as from Facebook Ads campaigns. My role involved gathering and analyzing this data to identify patterns and trends in customer behavior. With this information, I developed customer segmentation strategies in Facebook Ads, optimizing advertising campaigns to enhance their effectiveness and maximize return on investment."
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <CalculatorIcon className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector2}`}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Digital Trafficker & Data Analyst"
            company="Personal Project"
            date="December 2023 - Present"
            description="I am responsible for extracting sales information from platforms such as Shopify and Dropi, as well as from Facebook Ads campaigns. My role involved gathering and analyzing this data to identify patterns and trends in customer behavior. With this information, I developed customer segmentation strategies in Facebook Ads, optimizing advertising campaigns to enhance their effectiveness and maximize return on investment."
          />
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className={styles.timelineItem}>
        <TimelineSeparator className={styles.timelineSeparator}>
          <FaMoneyCheckAlt className={iconStyles.timelineIcon} />
          <TimelineConnector
            className={`${styles.timelineConnector} ${styles.connector3}`}
          />
          <TimelineDot
            style={{
              textAlign: "center",
              width: "20px",
              height: "20px",
              margin: "4px auto",
              backgroundColor: "lightblue",
            }}
          />
        </TimelineSeparator>
        <TimelineContent className={styles.timelineContent}>
          <ExperienceCard
            title="Software Attempter"
            company="Freelancer"
            date="June 2024 - Present"
            description="I implemented scripts to train artificial intelligence models using Python and JavaScript, developing and optimizing these scripts to ensure efficient and accurate model training. The Python models were focused on data analysis and data science, while the JavaScript models were centered on web development."
          />
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default TimelineComponent;
