"use client";
import styles from "../../styles/css/app.module.css";

export default function loading() {
  return (
    <div className={styles.loading_screen}>
      <div className="loader"></div>
    </div>
  );
}
