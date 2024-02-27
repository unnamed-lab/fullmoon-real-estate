import styles from "../../styles/css/app.module.css";
import room01 from "../../assets/img/room01.jpg";
import room02 from "../../assets/img/room02.jpg";
import room03 from "../../assets/img/room03.jpg";
function Service({ header, headerStyle }) {
  const services = [
    {
      title: "Real Estate Consulting",
      desc: "Get expert advice and guidance tailored to your needs. From market analysis to risk assessment, we help you make informed decisions in the real estate market.  Let us help you navigate the complexities of the real estate industry and achieve your goals with confidence.",
      img: room01,
    },
    {
      title: "Real estate management",
      desc: "Maximize your investment with our hassle-free management solutions. From tenant screening to maintenance, we handle everything to ensure your property thrives.Trust us to handle the day-to-day management of your property, so you can focus on what matters most to you.",
      img: room02,
    },
    {
      title: "Real estate development",
      desc: "Turn your vision into reality with our full-service development expertise. From site selection to project completion, we bring your project to life on time and within budget. Partner with us to unlock the full potential of your real estate investment and create lasting value for generations to come.",
      img: room03,
    },
  ];
  return (
    <section className={styles.about_service}>
      <h3 style={headerStyle}>{header || "Services"}</h3>
      <ul className={styles.about_service_gallery}>
        {services?.map((el, index) => {
          return (
            <li key={index}>
              <div className={styles.thumbnail}>
                <p>{el.title}</p>
                <img
                  src={el.img}
                  alt={el.title}
                  width={"400px"}
                  height={"200px"}
                  title={el.title}
                  loading="lazy"
                />
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
