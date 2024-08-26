import DownloadButton from "@/components/mainPage/DownloadButton";
import React from "react";
import { IoMdDownload } from "react-icons/io";
import styles from "@/styles/assets/assets.module.scss";

function page() {
  return (
    <div className={styles.container}>
      <h2>Choose your language</h2>
      <div className={styles.buttons}>
        <DownloadButton
          buttonName={"English CV"}
          icon={<IoMdDownload />}
          link={
            "https://res.cloudinary.com/dhjqarghy/image/upload/v1724713638/data/juan_data_en_hdn7su.pdf"
          }
        />
        <DownloadButton
          buttonName={"Spanish CV"}
          icon={<IoMdDownload />}
          link={
            "https://res.cloudinary.com/dhjqarghy/image/upload/v1724713638/data/Juan_data_es_tlbytg.pdf"
          }
        />
      </div>
    </div>
  );
}

export default page;
