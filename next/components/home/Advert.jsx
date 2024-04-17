import Image from "next/image";
import styles from "../../styles/css/app.module.css";
import React from "react";
import Link from "next/link";

export default function Advert({ img, info = "", url = "#" }) {
  return (
    img &&
    info && (
      <section className={styles.advert}>
        <div className={styles.advert_item}>
          <div className={styles.advert_thumb}>
            <Image src={img} alt={info} width={400} height={400} />
          </div>
          <div className={styles.advert_info}>
            <p>
              {info?.split("\n")?.map((el, index) => {
                return <p key={index}>{el}</p>;
              })}
            </p>
            {url && (
              <Link href={url}>
                <button type="submit" className="btn secondary">
                  Learn More
                </button>
              </Link>
            )}
          </div>
        </div>
      </section>
    )
  );
}
