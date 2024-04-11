"use client";
import Image from "next/image";
import styles from "../../styles/css/app.module.css";
import { team } from "../../utils/team";

function Team() {
  return (
    <section className={styles.about_team}>
      <h3>Meet our team</h3>
      <ul className={styles.about_team_gallery}>
        {team?.map((el, index) => {
          return (
            <li key={index}>
              <div className={styles.detail}>
                <h4>{el.name}</h4>
                <h5>{el.title}</h5>
              </div>
              <Image
                src={el.img}
                width={260}
                height={390}
                alt={el.name}
                title={el.name}
                loading="lazy"
                fetchPriority="high"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Team;
