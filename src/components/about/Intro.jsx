import styles from "../../styles/css/app.module.css";
function Intro({children}) {
  return (
    <section className={styles.about_intro}>
      <h3>Who we are</h3>
      <div className={styles.about_intro_desc}>
        {children}
      </div>
    </section>
  );
}

export default Intro;
