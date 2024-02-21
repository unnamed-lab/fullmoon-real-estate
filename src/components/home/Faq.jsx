import styles from "../../styles/css/app.module.css";
import { Accordion } from "../forms";
function Faq() {
  const faq = [
    {
      title: "Aenean elit sem, feugiat dapibus tincidunt sapien?",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas ipsam, voluptatem non quia doloribus? Fugiat reprehenderit dolor incidunt similique, atque suscipit quibusdam possimus nobis!",
    },
    {
      title: "Nunc maximus faucibus elit in dictum?",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem quas ipsam, voluptatem non quia doloribus? ",
    },
    {
      title: "Donec commodo dui id fringilla consectetur?",
      info: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ];
  return (
    <section className={styles.faq}>
      <h2 className="section_header center" style={{ paddingTop: 2 + "rem" }}>
        Frequently asked questions
      </h2>
      <div className={styles.faq_container}>
        {
            faq?.map((el, index) => {
                return (<Accordion key={index} header={el.title} content={el.info} />)
            })
        }
      </div>
    </section>
  );
}

export default Faq;
