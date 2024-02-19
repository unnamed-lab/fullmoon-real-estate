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
                    <svg
                      width="113"
                      height="113"
                      viewBox="0 0 113 113"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <rect
                        width="112"
                        height="112"
                        transform="translate(0.159912 0.931763)"
                        fill="url(#pattern0)"
                      />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        >
                          <use
                            xlinkHref="#image0_1_813"
                            transform="scale(0.00892857)"
                          />
                        </pattern>
                        <image
                          id="image0_1_813"
                          width="112"
                          height="112"
                          xlinkHref="data:image/png;base64,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"
                        />
                      </defs>
                    </svg>
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
