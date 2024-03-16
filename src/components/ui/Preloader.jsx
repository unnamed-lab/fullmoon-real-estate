import styles from "../../styles/css/app.module.css";

function Preloader() {
  return (
    <div className={styles.loading_screen}>
      <div className="loader"></div>
    </div>
  );
}

export default Preloader;
