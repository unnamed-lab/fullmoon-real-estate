import styles from "../../styles/css/app.module.css";
function AboutCompany({ logo, content }) {
  return (
    <section className={styles.service_brief}>
      <h3>
        Why choose <b>FULLMOON</b>
      </h3>
      <div className={styles.service_row}>
        <div className={styles.item_logo}>
          <div className={styles.img_holder}>
            <img src={logo} alt="Fullmoon Real Estate" />
          </div>
          <div className={styles.item_square}></div>
        </div>
        <ul className={styles.service_menu}>
          {content?.map((el, index) => {
            return (
              <li key={index} className={styles.item_service}>
                <div className={styles.icon_placeholder}>
                  <span>
                    <img src={el.icon} alt={el.title} />
                  </span>
                </div>
                <div>
                  <h4>{el.title}</h4>
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
