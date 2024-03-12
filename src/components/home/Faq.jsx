import styles from "../../styles/css/app.module.css";
import { faq } from "../../utils/faq";
import { Accordion } from "../forms";
function Faq() {
  return (
    <section className={styles.faq}>
      <h2 className="section_header center" style={{ paddingTop: 2 + "rem" }}>
        Frequently asked questions
      </h2>
      <div className={styles.faq_container}>
        {faq
          ?.filter((el, index) => {
            return index <= 6 ? true : false;
          })
          ?.map((el, index) => {
            return (
              <Accordion key={index} header={el.title} content={el.info} />
            );
          })}
      </div>
    </section>
  );
}

export default Faq;
