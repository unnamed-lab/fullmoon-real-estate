import styles from "../../styles/css/app.module.css";
function Hero({ bgImg, backdrop = true, customStyles, customContainerStyles, children }) {
  return (
    <section className={styles.hero} style={customStyles}>
      <div className={styles.hero_content} style={customContainerStyles}>
        {children}
      </div>
      <div className={styles.bgWave}>
        <svg
          width="1440"
          height="30"
          viewBox="0 0 1440 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1138.7 27.93C1053.23 26.34 970.354 22.53 861.103 12.93C818.441 9.11998 750.267 3.62998 716.253 2.15998C682.238 0.689983 640.44 -0.180017 607.435 0.569983C592.733 0.899983 574.861 0.989983 535.225 2.78998C496.022 4.67998 451.342 7.76998 420.786 10.2C361.261 14.97 284.007 16.77 227.652 16.98C103.124 17.46 -0.649902 7.73998 -0.649902 7.73998V30H1440.65V19.59C1440.65 19.59 1366.42 25.41 1287.58 27.3C1209.32 29.1 1172.71 28.56 1138.7 27.93Z"
            fill="white"
          />
        </svg>
      </div>
      {backdrop ? <div className={styles.bgBackdrop}></div> : ""}
      {bgImg ? <img src={bgImg} alt="Welcome to Fullmoon Real Estate" /> : ""}
      <div className={styles.bgPattern}>
        <svg
          width="286"
          height="427"
          viewBox="0 0 286 427"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect
            width="335"
            height="427"
            transform="translate(-49)"
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
                xlinkHref="#image0_3_1279"
                transform="matrix(0.00204918 0 0 0.00127125 0.41791 0.735185)"
              />
            </pattern>
            <image
              id="image0_3_1279"
              width="244"
              height="155"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
