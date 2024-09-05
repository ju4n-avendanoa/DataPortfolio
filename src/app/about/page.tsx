"use client";

import { IoExtensionPuzzleSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";
import { GoGear } from "react-icons/go";
import { IoBag } from "react-icons/io5";
import { FaInfo } from "react-icons/fa";
import SkillsGrid from "@/components/about/SkillsGrid";
import Skill from "@/components/skills/Skill";
import styles from "@/styles/about/about.module.scss";
import TimelineComponent from "@/components/about/Timeline";
import EducationCard from "@/components/about/EducationCard";
import iconStyles from "@/styles/about/aboutIcon.module.scss";

function page() {
  return (
    <main className={styles.main}>
      <motion.section
        className={styles.biography}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h1>About me</h1>
          <FaInfo className={iconStyles.icon} />
        </div>
        <p>
          During the final stage of my studies as a mechanical engineer, I
          discovered my passion for data analysis, leading me to embark on a new
          professional path. With a solid foundation in analysis techniques and
          visualization tools, I have gained experience across the entire data
          lifecycle, from cleaning and manipulation to creating visualizations
          that drive decision-making.
          <br />
          <br />
          My transition to data analysis was driven by a desire for greater
          personal fulfillment and the opportunity to work on projects that
          truly matter. I am currently seeking a full-time position as a data
          analyst, eager to apply my skills and passion to make a significant
          impact on challenging projects.
        </p>
      </motion.section>
      <motion.section
        className={styles.skills}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Skills</h2>

          <IoExtensionPuzzleSharp className={iconStyles.icon} />
        </div>
        <p>
          I emphasize key skills to tackle challenges and deliver effective
          solutions, while also strengthening my existing abilities.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "50px",
            width: "100%",
          }}
        >
          <SkillsGrid title="Data Analysis">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
              name="Python"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg"
              name="Pandas"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg"
              name="Numpy"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg"
              name="Matplotlib"
            />
            <div className={styles.customSkill}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                className={styles.icon}
              >
                <g>
                  <path
                    fill="#eda503"
                    d="M38,44H26c-0.552,0-1-0.448-1-1V5c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v38	C39,43.552,38.552,44,38,44z"
                  ></path>
                  <path
                    fill="#ffca28"
                    d="M30,44H18c-0.552,0-1-0.448-1-1V15c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v28	C31,43.552,30.552,44,30,44z"
                  ></path>
                  <path
                    fill="#ffe082"
                    d="M22,44H10c-0.552,0-1-0.448-1-1V25c0-0.552,0.448-1,1-1h12c0.552,0,1,0.448,1,1v18	C23,43.552,22.552,44,22,44z"
                  ></path>
                </g>
              </svg>
              <h2>Power BI</h2>
            </div>
            <div className={styles.customSkill}>
              <svg
                className={styles.icon}
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#169154"
                  d="M29,6H15.744C14.781,6,14,6.781,14,7.744v7.259h15V6z"
                ></path>
                <path
                  fill="#18482a"
                  d="M14,33.054v7.202C14,41.219,14.781,42,15.743,42H29v-8.946H14z"
                ></path>
                <path
                  fill="#0c8045"
                  d="M14 15.003H29V24.005000000000003H14z"
                ></path>
                <path fill="#17472a" d="M14 24.005H29V33.055H14z"></path>
                <g>
                  <path
                    fill="#29c27f"
                    d="M42.256,6H29v9.003h15V7.744C44,6.781,43.219,6,42.256,6z"
                  ></path>
                  <path
                    fill="#27663f"
                    d="M29,33.054V42h13.257C43.219,42,44,41.219,44,40.257v-7.202H29z"
                  ></path>
                  <path
                    fill="#19ac65"
                    d="M29 15.003H44V24.005000000000003H29z"
                  ></path>
                  <path fill="#129652" d="M29 24.005H44V33.055H29z"></path>
                </g>
                <path
                  fill="#0c7238"
                  d="M22.319,34H5.681C4.753,34,4,33.247,4,32.319V15.681C4,14.753,4.753,14,5.681,14h16.638 C23.247,14,24,14.753,24,15.681v16.638C24,33.247,23.247,34,22.319,34z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.807 19L12.193 19 14.129 22.754 16.175 19 18.404 19 15.333 24 18.474 29 16.123 29 14.013 25.07 11.912 29 9.526 29 12.719 23.982z"
                ></path>
              </svg>
              <h2>Microsoft Excel</h2>
            </div>
            <div className={styles.customSkill}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="200"
                height="200"
                viewBox="0 0 256 256"
                className={styles.icon}
              >
                <path
                  fill="#FFF"
                  d="M128.902 2.393a124.702 124.702 0 0 0-124.7 124.7a124.702 124.702 0 0 0 124.7 124.698A124.702 124.702 0 0 0 253.59 128.676l.01-1.584l-.01-1.584A124.702 124.702 0 0 0 128.902 2.393Z"
                />
                <g fill="#AFDAD2" stroke="#FFF" strokeWidth=".25">
                  <path d="M100.427 73.98a4.803 4.803 0 1 0 0-9.606a4.803 4.803 0 0 0 0 9.606Zm-10.343 7.242a4.652 4.652 0 1 0 0-9.304a4.652 4.652 0 0 0 0 9.304Zm-9.949 4.608a4.38 4.38 0 1 0 0-8.76a4.38 4.38 0 0 0 0 8.76Zm29.017-17.572a4.946 4.946 0 1 0 0-9.89a4.946 4.946 0 0 0 0 9.89ZM72.67 75.444a3.323 3.323 0 1 0 0-6.646a3.323 3.323 0 0 0 0 6.646Zm-8.205 18.204a3.948 3.948 0 1 0 0-7.896a3.948 3.948 0 0 0 0 7.896Zm5.022-31.26a4.757 4.757 0 1 0 0-9.515a4.757 4.757 0 0 0 0 9.515Zm12.837 8.902a3.68 3.68 0 1 0 0-7.358a3.68 3.68 0 0 0 0 7.359Zm63.444-10.98a4.302 4.302 0 1 0 0-8.605a4.302 4.302 0 0 0 0 8.605ZM55.535 83.116a2.608 2.608 0 1 0 0-5.216a2.608 2.608 0 0 0 0 5.216ZM64.2 80.66a3.095 3.095 0 1 0 0-6.189a3.095 3.095 0 0 0 0 6.19Zm-15.801-9.806a4.103 4.103 0 1 0 0-8.205a4.103 4.103 0 0 0 0 8.205Zm16.141-1.808a2.139 2.139 0 1 0 0-4.277a2.139 2.139 0 0 0 0 4.277Zm28.635-3.334a3.992 3.992 0 1 0 0-7.985a3.992 3.992 0 0 0 0 7.985Zm30.33 2.311a3.446 3.446 0 1 0 0-6.891a3.446 3.446 0 0 0 0 6.89Zm6.307-21.497a2.255 2.255 0 1 0 0-4.51a2.255 2.255 0 0 0 0 4.51Zm7.331 12.982a3.768 3.768 0 1 0 0-7.536a3.768 3.768 0 0 0 0 7.536ZM99.5 57.31a3.872 3.872 0 1 0 0-7.744a3.872 3.872 0 0 0 0 7.744ZM50.998 94.521a3.142 3.142 0 1 0 0-6.284a3.142 3.142 0 0 0 0 6.284Z" />
                  <path d="M154.48 61.132a4.785 4.785 0 1 0 0-9.57a4.785 4.785 0 0 0 0 9.57Zm-46.171-3.241a4.392 4.392 0 1 0 0-8.784a4.392 4.392 0 0 0 0 8.784Zm-51.029 3.54a4.072 4.072 0 1 0 0-8.144a4.072 4.072 0 0 0 0 8.144Zm22.662-10.513a4.708 4.708 0 1 0 0-9.416a4.708 4.708 0 0 0 0 9.416Zm88.325 6.34a2.908 2.908 0 1 0 0-5.816a2.908 2.908 0 0 0 0 5.816ZM66.977 45.382a3.7 3.7 0 1 0 0-7.398a3.7 3.7 0 0 0 0 7.398ZM83.658 61.95a3.148 3.148 0 1 0 0-6.296a3.148 3.148 0 0 0 0 6.296Zm7.542-6.832a3.199 3.199 0 1 0-.001-6.397a3.199 3.199 0 0 0 0 6.397Zm-49.398 8.125a3.22 3.22 0 1 0 0-6.44a3.22 3.22 0 0 0 0 6.44Zm8.868-12.521a2.954 2.954 0 1 0 0-5.908a2.954 2.954 0 0 0 0 5.908Zm68.154 9.171a2.476 2.476 0 1 0 0-4.953a2.476 2.476 0 0 0 0 4.953ZM39.53 79.544a4.092 4.092 0 1 0 0-8.185a4.092 4.092 0 0 0 0 8.185Zm-9.14-6.9a3.077 3.077 0 1 0 0-6.153a3.077 3.077 0 0 0 0 6.153Zm96.879-13.47a3.095 3.095 0 1 0 0-6.19a3.095 3.095 0 0 0 0 6.19ZM56.914 75.243a4.77 4.77 0 1 0 0-9.542a4.77 4.77 0 0 0 0 9.542Z" />
                  <path d="M162.01 53.552a4.783 4.783 0 1 0 0-9.565a4.783 4.783 0 0 0 0 9.565ZM42.067 98.617a2.776 2.776 0 1 0 0-5.552a2.776 2.776 0 0 0 0 5.552Zm69.34-54.147a3.817 3.817 0 1 0 0-7.633a3.817 3.817 0 0 0 0 7.633Zm79.294 5.256a3.899 3.899 0 1 0 0-7.798a3.899 3.899 0 0 0 0 7.798Zm-51.863-1.986a3.104 3.104 0 1 0 0-6.21a3.104 3.104 0 0 0 0 6.21Zm-67.68 40.953a4.047 4.047 0 1 0 0-8.095a4.047 4.047 0 0 0 0 8.095Zm78.208-39.617a3.875 3.875 0 1 0 0-7.75a3.875 3.875 0 0 0 0 7.75Zm27.438 3.777a3.211 3.211 0 1 0 0-6.423a3.211 3.211 0 0 0 0 6.423Zm30.314 6.96a2.895 2.895 0 1 0 0-5.79a2.895 2.895 0 0 0 0 5.79ZM98.802 38.544a2.495 2.495 0 1 0 0-4.99a2.495 2.495 0 0 0 0 4.99Zm22.683-6.848a3.652 3.652 0 1 0 0-7.305a3.652 3.652 0 0 0 0 7.305Zm84.987 19.578a4.812 4.812 0 1 0 0-9.624a4.812 4.812 0 0 0 0 9.624Zm-90.498 1.966a4.547 4.547 0 1 0 0-9.095a4.547 4.547 0 0 0 0 9.094Zm16.823-17.041a4.536 4.536 0 1 0 0-9.072a4.536 4.536 0 0 0 0 9.072Zm39.323 5.526a4.7 4.7 0 1 0 0-9.399a4.7 4.7 0 0 0 0 9.399Zm48.649 29.541a4.45 4.45 0 1 0 0-8.898a4.45 4.45 0 0 0 0 8.898ZM120.458 17.405a2.54 2.54 0 1 0 0-5.08a2.54 2.54 0 0 0 0 5.08Z" />
                  <path d="M161.022 44.369a4.266 4.266 0 1 0 0-8.531a4.266 4.266 0 0 0 0 8.531Zm-5.707-8.193a3.443 3.443 0 1 0 0-6.886a3.443 3.443 0 0 0 0 6.886Zm-17.302-7.496a4.418 4.418 0 1 0 0-8.836a4.418 4.418 0 0 0 0 8.836ZM89.282 46.695a4.952 4.952 0 1 0 0-9.905a4.952 4.952 0 0 0 0 9.905Zm-30.553-7.292a2.697 2.697 0 1 0 0-5.394a2.697 2.697 0 0 0 0 5.394Zm12.821-1.809a3.496 3.496 0 1 0 0-6.992a3.496 3.496 0 0 0 0 6.992Zm117.466 21.181a4.31 4.31 0 1 0 0-8.619a4.31 4.31 0 0 0 0 8.619ZM141.738 36.06a2.393 2.393 0 1 0 0-4.786a2.393 2.393 0 0 0 0 4.786Zm-50.814.482a4.539 4.539 0 1 0 0-9.078a4.539 4.539 0 0 0 0 9.078ZM24.326 92.178a3.946 3.946 0 1 0 0-7.892a3.946 3.946 0 0 0 0 7.892Zm10.512 1.362a4.585 4.585 0 1 0 0-9.17a4.585 4.585 0 0 0 0 9.17Zm37.049-40.42a4.412 4.412 0 1 0 0-8.824a4.412 4.412 0 0 0 0 8.825ZM25.623 82.356a3.42 3.42 0 1 0 0-6.84a3.42 3.42 0 0 0 0 6.84Zm137.891-49.643a3.742 3.742 0 1 0 0-7.485a3.742 3.742 0 0 0 0 7.485ZM59.334 48.427a3.405 3.405 0 1 0 0-6.811a3.405 3.405 0 0 0 0 6.81Z" />
                  <path d="M42.825 89.445a4.776 4.776 0 1 0 0-9.553a4.776 4.776 0 0 0 0 9.553Zm155.259-32.502a4.68 4.68 0 1 0 0-9.359a4.68 4.68 0 0 0 0 9.36Zm16.871-.557a3.219 3.219 0 1 0 0-6.437a3.219 3.219 0 0 0 0 6.437ZM103.689 48.42a3.585 3.585 0 1 0 0-7.17a3.585 3.585 0 0 0 0 7.17Zm78.693-4.03a3.003 3.003 0 1 0 0-6.005a3.003 3.003 0 0 0 0 6.005Zm-1.29-7.523a4.897 4.897 0 1 0 0-9.794a4.897 4.897 0 0 0 0 9.794Zm-60.374 8.346a4.378 4.378 0 1 0 0-8.757a4.378 4.378 0 0 0 0 8.757Zm92.517 21.163a3.756 3.756 0 1 0 0-7.512a3.756 3.756 0 0 0 0 7.512ZM33.938 100.288a2.203 2.203 0 1 0 0-4.406a2.203 2.203 0 0 0 0 4.406Zm46.295-61.082a4.113 4.113 0 1 0 0-8.226a4.113 4.113 0 0 0 0 8.226Zm30.02-6.706a2.938 2.938 0 1 0 0-5.876a2.938 2.938 0 0 0 0 5.876Zm85.254 9.046a3.696 3.696 0 1 0 0-7.393a3.696 3.696 0 0 0 0 7.393Zm-93.464-14.978a4.596 4.596 0 1 0 0-9.193a4.596 4.596 0 0 0 0 9.193Z" />
                  <path d="M174.151 30.958a4.25 4.25 0 1 0 0-8.501a4.25 4.25 0 0 0 0 8.5Zm-92.824-4.532a3.405 3.405 0 1 0 0-6.81a3.405 3.405 0 0 0 0 6.81Zm8.176-2.632a3.756 3.756 0 1 0 0-7.513a3.756 3.756 0 0 0 0 7.513Zm57.896-4.708a4.407 4.407 0 1 0 0-8.814a4.407 4.407 0 0 0 0 8.814Zm-17.707.934a3.43 3.43 0 1 0 0-6.86a3.43 3.43 0 0 0 0 6.86Zm26.508 4.186a2.623 2.623 0 1 0 0-5.246a2.623 2.623 0 0 0 0 5.246Z" />
                  <path d="M147.442 28.232a4.864 4.864 0 1 0 0-9.727a4.864 4.864 0 0 0 0 9.727Zm19.303-4.719a3.361 3.361 0 1 0 0-6.723a3.361 3.361 0 0 0 0 6.723ZM15.926 105.501a4.222 4.222 0 1 0 0-8.444a4.222 4.222 0 0 0 0 8.444Zm95.796-82.278a2.273 2.273 0 1 0 0-4.546a2.273 2.273 0 0 0 0 4.546ZM189.81 33.63a2.743 2.743 0 1 0 0-5.487a2.743 2.743 0 0 0 0 5.486Zm-51.268-13.723a3.967 3.967 0 1 0 0-7.934a3.967 3.967 0 0 0 0 7.934ZM47.95 80.147a4.57 4.57 0 1 0 0-9.142a4.57 4.57 0 0 0 0 9.142Z" />
                </g>
                <path
                  fill="#FFF"
                  d="m174.343 58.56l-4.717-.112l-4.718.108l-4.717.328l-4.715.543l-4.71.753l-4.706.951l-4.698 1.14l-4.691 1.314l-4.684 1.474l-4.676 1.616l-4.667 1.741l-4.66 1.848l-4.653 1.936l-4.645 2.005l-4.639 2.056l-4.632 2.087l-9.246 4.2l-4.614 2.081l-4.61 2.048l-4.605 2.002l-4.6 1.945l-4.596 1.878l-4.593 1.801l-4.59 1.72l-4.587 1.63l-4.585 1.538l-4.583 1.444l-4.581 1.348l-4.582 1.252l-4.58 1.158l-4.581 1.064l-4.582.974l-4.582.886l-4.584.804l-5.028.795l-.222 1.53a122.374 122.374 0 0 0-.496 31.246l.32 2.843l6.64-2.947l4.63-2.088l9.246-4.2l4.614-2.08l4.608-2.042l4.602-1.986l4.594-1.912l4.588-1.82l4.58-1.708l4.572-1.58l4.564-1.437l4.557-1.277l4.549-1.103l4.541-.92l4.535-.723l4.53-.522l4.525-.315l4.523-.104l4.522.109l4.522.318l4.526.526l4.53.727l4.534.921l4.542 1.105l4.549 1.277l4.556 1.436l4.564 1.579l4.573 1.707l4.58 1.817l4.587 1.91l4.595 1.983l4.601 2.04l4.608 2.076l9.235 4.195l4.625 2.086l4.63 2.057l4.636 2.016l4.64 1.962l4.643 1.897l4.647 1.823l4.65 1.742l4.654 1.655l4.655 1.563l4.657 1.468l4.658 1.371l4.66 1.274l4.658 1.178l4.66 1.083l6.552 1.395l.544-1.87a122.381 122.381 0 0 0 4.866-32.645l.01-1.542l-.01-1.554l-.032-1.664a122.399 122.399 0 0 0-9.274-43.627l-.423-1.01l-.756-1.748l-4.763-2.142l-4.63-2.052l-4.639-2.002l-4.645-1.934l-4.653-1.845l-4.66-1.74l-4.667-1.615l-4.676-1.473l-4.684-1.314l-4.69-1.141l-4.7-.954l-4.704-.755l-4.71-.547l-4.716-.332Zm-4.766 1.985l4.62.108l4.62.323l4.62.535l4.62.74l4.62.936l4.62 1.122l4.62 1.295l4.62 1.455l4.62 1.598l4.62 1.724l4.62 1.833l4.62 1.922l4.62 1.995l4.62 2.047l4.024 1.81a120.28 120.28 0 0 1 9.955 44.845l.032 1.636l.01 1.528l-.01 1.528a120.284 120.284 0 0 1-4.783 32.085l-4.608-.98l-4.62-1.074l-4.62-1.168l-4.62-1.263l-4.62-1.36l-4.62-1.455l-4.62-1.551l-4.62-1.643l-4.62-1.73l-4.62-1.813l-4.62-1.887l-4.62-1.953l-4.62-2.01l-4.62-2.052l-4.62-2.083l-9.24-4.198l-4.62-2.082l-4.62-2.047l-4.62-1.994l-4.62-1.923l-4.62-1.833l-4.62-1.724l-4.62-1.598l-4.62-1.454l-4.62-1.296l-4.62-1.122l-4.62-.936l-4.62-.74l-4.62-.535l-4.62-.323l-4.62-.108l-4.62.108l-4.62.323l-4.62.535l-4.62.74l-4.62.936l-4.62 1.122l-4.62 1.296l-4.62 1.454l-4.62 1.598l-4.62 1.724l-4.62 1.833l-4.62 1.923l-4.62 1.994l-4.62 2.047l-4.62 2.082l-9.24 4.198l-4.62 2.083l-4.025 1.787a120.275 120.275 0 0 1 .488-30.712l3.536-.559l4.62-.81l4.62-.895l4.62-.983l4.62-1.073l4.62-1.168l4.62-1.263l4.62-1.36l4.62-1.456l4.62-1.55l4.62-1.643l4.62-1.73l4.62-1.813l4.62-1.887l4.62-1.954l4.62-2.008l4.62-2.053l4.62-2.083l9.24-4.198l4.62-2.082l4.62-2.047l4.62-1.995l4.62-1.922l4.62-1.833l4.62-1.724l4.62-1.598l4.62-1.455l4.62-1.295l4.62-1.122l4.62-.937l4.621-.74l4.62-.534l4.62-.323l4.62-.108Z"
                />
                <path
                  fill="#7DB0BC"
                  stroke="#FFF"
                  d="m169.577 60.045l4.643.108l4.643.325l4.642.537l4.641.743l4.64.94l4.638 1.127l4.636 1.3l4.634 1.46l4.632 1.601l4.636 1.73l4.627 1.836l4.626 1.925l4.625 1.997l4.623 2.048l4.201 1.893a120.778 120.778 0 0 1 10.087 45.827l.017 1.024l.01 1.534l-.01 1.531a120.784 120.784 0 0 1-4.933 32.663l-5.07-1.077l-4.63-1.076l-4.63-1.17l-4.629-1.266l-4.63-1.363l-4.628-1.458l-4.628-1.554l-4.628-1.646l-4.627-1.733l-4.627-1.815l-4.626-1.89l-4.624-1.955l-4.624-2.01l-4.622-2.054l-4.622-2.084l-9.238-4.197l-4.618-2.08l-4.615-2.046l-4.614-1.992l-4.612-1.92l-4.61-1.828l-4.615-1.722l-4.608-1.594l-4.606-1.45l-4.604-1.291l-4.602-1.118l-4.6-.932l-4.6-.737l-4.597-.532l-4.598-.321l-4.596-.108l-4.597.108l-4.597.321l-4.598.532l-4.6.737l-4.6.932l-4.602 1.118l-4.604 1.29l-4.606 1.451l-4.607 1.594l-4.605 1.718l-4.612 1.83l-4.614 1.92l-4.616 1.992l-4.617 2.046l-4.619 2.081l-9.241 4.199l-4.622 2.084l-4.647 2.065a120.776 120.776 0 0 1 .465-31.882l3.892-.617l4.611-.809l4.612-.892l4.61-.98l4.611-1.072l4.61-1.165l4.611-1.26l4.611-1.358l4.612-1.453l4.611-1.547l4.612-1.64l4.613-1.728l4.614-1.81l4.614-1.885l4.615-1.951l4.617-2.007l4.617-2.052l4.619-2.083l9.241-4.198l4.623-2.083l4.625-2.05l4.626-1.996l4.627-1.926l4.63-1.836l4.626-1.727l4.632-1.602l4.634-1.459l4.636-1.3l4.638-1.126l4.64-.94l4.64-.744l4.643-.537l4.643-.325l4.643-.108Z"
                />
                <path
                  fill="#5C7DA2"
                  d="m95.657 115.985l4.62.108l4.62.323l4.62.535l4.62.74l4.62.936l4.62 1.122l4.62 1.296l4.62 1.454l4.62 1.598l4.62 1.724l4.62 1.833l4.62 1.923l4.62 1.994l4.62 2.047l4.62 2.082l4.62 2.099l4.62 2.099l4.62 2.083l4.62 2.053l4.62 2.009l4.62 1.953l4.62 1.887l4.62 1.813l4.62 1.73l4.62 1.643l4.62 1.55l4.62 1.457l4.62 1.36l4.62 1.262l4.62 1.168l4.62 1.074l3.955.84a120.275 120.275 0 0 1-68.806 75.342a120.284 120.284 0 0 1-157.154-65.096a120.283 120.283 0 0 1-8.133-30.376l3.757-1.669l4.62-2.083l4.62-2.1l4.62-2.098l4.62-2.082l4.62-2.047l4.62-1.994l4.62-1.923l4.62-1.833l4.62-1.724l4.62-1.598l4.62-1.454l4.62-1.296l4.62-1.122l4.62-.936l4.62-.74l4.62-.535l4.62-.323l4.62-.108Z"
                />
                <path
                  fill="#444876"
                  d="M104.897 147.13v15.493h27.72v21.396h27.72v14.634h27.72v6.177h27.72v5.399a120.277 120.277 0 0 1-133.81 28.893a120.284 120.284 0 0 1-60.231-54.77v-14.434h27.72V150.61h27.72v-3.48h27.72Z"
                />
                <path
                  fill="#FFF"
                  d="M105.843 146.184v15.493h27.72v21.395h27.72v14.635h27.72v6.177h27.72l.002 5.322a133.74 133.74 0 0 1-1.895 2.023l-.001-5.454h-25.826v25.883c-.628.37-1.26.734-1.894 1.092v-33.151l-25.826-.001v43.982c-.63.182-1.261.358-1.894.529v-59.145h-25.826v63.185c-.631.029-1.263.053-1.894.073v-84.653h-25.826v82.65c-.633-.118-1.264-.241-1.895-.37l.001-97.774H78.122v1.59h.001v87.785a116.51 116.51 0 0 1-1.895-.883l.001-85.01H50.402v17.414h.001l-.001 50.93a120.27 120.27 0 0 1-1.893-1.631v-47.406H22.682l-.001 15.236c-.65-1.179-1.282-2.37-1.893-3.571l.002-13.558h27.72v-19.306h27.72v-3.481h29.613Z"
                />
                <path
                  fill="#444876"
                  d="M127.997 0a128 128 0 0 1 127.986 126.37l.01 1.627l-.01 1.626a128 128 0 0 1-127.986 126.37A128 128 0 0 1 0 127.998A128 128 0 0 1 127.997 0Zm0 4.203A123.797 123.797 0 0 0 4.203 127.997A123.797 123.797 0 0 0 127.997 251.79A123.797 123.797 0 0 0 251.78 129.57l.01-1.573l-.01-1.573A123.797 123.797 0 0 0 127.997 4.203Z"
                />
              </svg>
              <h2>Seaborn</h2>
            </div>
          </SkillsGrid>
          <SkillsGrid title="Technologies">
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg"
              name="Jupyter"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
              name="Git"
            />
            <div className={styles.customSkill}>
              <svg viewBox="0 0 128 128" className={styles.icon}>
                <g fill="#ffffff">
                  <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
              <h2>Github</h2>
            </div>
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
              name="Docker"
            />

            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg"
              name="VSCode"
            />
          </SkillsGrid>
          <SkillsGrid title="Learning">
            <div className={styles.customSkill}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 48 48"
                className={styles.icon}
              >
                <rect
                  width="1.5"
                  height="9"
                  x="22.75"
                  y="1"
                  fill="#78909c"
                ></rect>
                <rect
                  width="9"
                  height="1.5"
                  x="19"
                  y="4.75"
                  fill="#78909c"
                ></rect>
                <rect
                  width="1.5"
                  height="9"
                  x="40.75"
                  y="19"
                  fill="#5c6bc0"
                ></rect>
                <rect
                  width="9"
                  height="1.5"
                  x="37"
                  y="22.75"
                  fill="#5c6bc0"
                ></rect>
                <rect
                  width="1.5"
                  height="9"
                  x="4.75"
                  y="19"
                  fill="#78909c"
                ></rect>
                <rect
                  width="9"
                  height="1.5"
                  x="1"
                  y="22.75"
                  fill="#78909c"
                ></rect>
                <rect
                  width="1.5"
                  height="9"
                  x="22.75"
                  y="37"
                  fill="#5c6bc0"
                ></rect>
                <rect
                  width="9"
                  height="1.5"
                  x="19"
                  y="40.75"
                  fill="#5c6bc0"
                ></rect>
                <rect width="17" height="3" x="15" y="22" fill="#e8762d"></rect>
                <rect width="3" height="17" x="22" y="15" fill="#e8762d"></rect>
                <rect width="2" height="14" x="11" y="6" fill="#ffa000"></rect>
                <rect width="14" height="2" x="5" y="12" fill="#ffa000"></rect>
                <rect width="2" height="14" x="34" y="6" fill="#607d8b"></rect>
                <rect width="14" height="2" x="28" y="12" fill="#607d8b"></rect>
                <rect width="2" height="14" x="11" y="27" fill="#c62828"></rect>
                <rect width="14" height="2" x="5" y="33" fill="#c62828"></rect>
                <rect width="2" height="14" x="34" y="27" fill="#0d47a1"></rect>
                <rect width="14" height="2" x="28" y="33" fill="#0d47a1"></rect>
              </svg>
              <h2>Tableu</h2>
            </div>
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg"
              name="Scikitlearn"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
              name="Tensorflow"
            />
            <Skill
              image="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
              name="Pytorch"
            />
          </SkillsGrid>
        </div>
      </motion.section>
      <motion.section
        className={styles.experience}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Experience</h2>
          <IoBag className={iconStyles.icon} />
        </div>
        <p className={styles.description}>
          A professional background marked by a strong commitment to delivering
          exceptional results and continuous growth.
        </p>
        <TimelineComponent />
      </motion.section>
      <motion.section
        className={styles.education}
        variants={{
          hidden: { opacity: 0, y: 0.75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <div className={styles.headers}>
          <h2 className={styles.seccionTitle}>Education</h2>
          <FaGraduationCap className={iconStyles.icon} />
        </div>
        <p className={styles.description}>
          Academic background that provides a solid foundation for tackling the
          challenges of the professional world.
        </p>
        <div className={styles.degrees}>
          <EducationCard
            degree="Mechanical Engineer"
            year="June 2023"
            university="University of Antioquia - Colombia"
            icon={<GoGear className={styles.icon} />}
          />
          <EducationCard
            degree="Data Analyst (virtual course)"
            year="August 2022"
            university="Codecademy"
            icon={<GoGear className={styles.icon} />}
          />
        </div>
      </motion.section>
    </main>
  );
}

export default page;
