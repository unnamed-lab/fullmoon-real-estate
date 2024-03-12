import { Hero } from "../components/home";
import MetaTags from "../components/seo/MetaTags";
import bgImg from "../assets/img/banner01.jpg";
import styles from "../styles/css/app.module.css";
import { faq } from "../utils/faq";
import { Accordion } from "../components/forms";

function Faq() {
  return (
    <>
      <MetaTags
        title={"Contact Us Now - Fullmoon Real Estate"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
        index={false}
        follow={false}
      />
      <Hero bgImg={bgImg} customStyles={{ height: 40 + "dvh" }}>
        <h1
          style={{
            textTransform: "uppercase",
            fontSize: 1.875 + "rem",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Frequently Ask Questions
        </h1>
      </Hero>
      <section className={styles.faq_body}>
        {faq?.map((el, index) => {
            return (
              <Accordion key={index} header={el.title} content={el.info} />
            );
          })}
      </section>
    </>
  );
}

export default Faq;
