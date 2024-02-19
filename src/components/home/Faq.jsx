import { Link } from "react-router-dom";
import styles from "../../styles/css/app.module.css";
import { Accordion } from "../forms";
function Faq() {
  return (
    <section className={styles.faq}>
      <h2 className="section_header center" style={{ paddingTop: 2 + "rem" }}>
        Frequently asked questions
      </h2>
      <div className={styles.faq_container}>
        <Accordion />
        <Accordion />
      </div>
    </section>
  );
}

export default Faq;
