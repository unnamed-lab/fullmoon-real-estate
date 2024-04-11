import Image from "next/image";
import img from "../../assets/img/banner01.jpg"
import styles from "../../styles/css/app.module.css";
import React from "react";
import Link from "next/link";

export default function Advert() {
  return (
    <section className={styles.advert}>
      <div className={styles.advert_item}>
        <div className={styles.advert_thumb}>
          <Image src={img} alt={"Advert Thumbnail"} />
        </div>
        <div className={styles.advert_info}>
          <p>
            NEW ESTATE LAUNCH ALERT🚀🚀🚀 ‼‼
            <br/> 
            Attention everyone‼‼ Step into a
            realm of unparalleled luxury and sophistication with our latest
            estate, LAVIDA EMPIRE ESTATE DISTRICT 2 
            <br/>
            Building upon the enjoyed
            privileges of our previous masterpiece Lavida Empire Estate: The
            Citadel of Luxurious Living. We invite you to embark on a journey
            where opulence meets innovation. 
            <br/>
            Brace yourself for a collection of
            homes adorned with extraordinary features, setting a new standard
            for refined living. Welcome to a residence that transcends
            expectations and indulges your senses in a balance of elegance and
            modernity. Prepare for the excitement‼‼
          </p>
          <Link href={"#"}>
            <button type="submit" className="btn secondary">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
