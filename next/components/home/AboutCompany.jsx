import styles from "../../styles/css/app.module.css";
import Image from "next/image";

function AboutCompany({ logo, content }) {
  return (
    <section className={styles.service_brief}>
      <h2>
        Why choose <b>FULLMOON</b>
      </h2>
      <div className={styles.service_row}>
        <div className={styles.item_logo}>
          <div className={styles.img_holder}>
            <Image
              src={logo}
              width={"200px"}
              height={"150px"}
              loading="lazy"
              alt="Fullmoon Real Estate"
              title="Fullmoon Real Estate"
              fetchPriority="high"
            />
          </div>
          <div className={styles.item_square}></div>
        </div>
        <ul className={styles.service_menu}>
          {content?.map((el, index) => {
            return (
              <li key={index} className={styles.item_service}>
                {/* <div className={styles.icon_placeholder}>
                  <span>
                    <Image
                      src={el.icon}
                      width={"80px"}
                      height={"*80px"}
                      loading="lazy"
                      alt={el.title}
                      title={el.title}
                      fetchPriority="high"
                    />
                  </span>
                </div> */}
                <div>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default AboutCompany;
