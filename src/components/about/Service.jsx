import styles from "../../styles/css/app.module.css";
import room01 from "../../assets/img/room01.jpg";
import room02 from "../../assets/img/room02.jpg";
import room03 from "../../assets/img/room03.jpg";
function Service() {
  const services = [
    {
      title: "Real Estate Consulting",
      desc: "Finding your perfect luxury residence tailored to your unique preferences and lifestyle.",
      img: room01,
    },
    {
      title: "Real estate management",
      desc: "In-depth insights and trends to inform and empower your real estate decisions.",
      img: room02,
    },
    {
      title: "Real estate development",
      desc: "Seamless relocation support ensuring a transition as luxurious as your new home.",
      img: room03,
    },
  ];
  return (
    <section className={styles.about_service}>
      <h3>Services</h3>
      <ul className={styles.about_service_gallery}>
        {services?.map((el, index) => {
          return (
            <li key={index}>
              <div className={styles.thumbnail}>
                <p>{el.title}</p>
                <img src={el.img} alt={el.title} title={el.title} />
              </div>
              <p>{el.desc}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Service;
