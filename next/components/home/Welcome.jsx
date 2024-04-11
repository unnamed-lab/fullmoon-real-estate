import styles from "../../styles/css/app.module.css";
import Link from "next/link";
import React from "react";

export default function Welcome({ title, desc }) {
  return (
    <section className={styles.welcome_note}>
      <div className={styles.heading}>
        <h1>{title}</h1>
        <Link href={"/about"}>
          <button type="submit" className="btn secondary">
            Find Out More
          </button>
        </Link>
      </div>
      <div className={styles.desc}>{desc}</div>
    </section>
  );
}
