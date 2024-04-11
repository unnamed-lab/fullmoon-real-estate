import Image from "next/image";
import styles from "../../styles/css/app.module.css";

function Service({ header, headerStyle }) {
  const services = [
    {
      title: "Affordable Accessible Real Estate Investment",
      desc: "Maximize your investment with our hassle-free management solutions. From tenant screening to maintenance, we handle everything to ensure your property thrives.Trust us to handle the day-to-day management of your property, so you can focus on what matters most to you.",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710312819/fullmoon-real-estate/room/room02_kbalev.jpg",
    },
    {
      title: "Business Consultancy, Brokerage and Land Banking",
      desc: "Get expert advice and guidance tailored to your needs. From market analysis to risk assessment, we help you make informed decisions in the real estate market.  Let us help you navigate the complexities of the real estate industry and achieve your goals with confidence.",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710312882/fullmoon-real-estate/room/room01_akli61.jpg",
    },

    {
      title: "Facility Management and Project Management",
      desc: "Turn your vision into reality with our full-service development expertise. From site selection to project completion, we bring your project to life on time and within budget. Partner with us to unlock the full potential of your real estate investment and create lasting value for generations to come.",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710312780/fullmoon-real-estate/room/room03_xrgey2.jpg",
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
                <Image
                  src={el.img}
                  alt={el.title}
                  width={400}
                  height={200}
                  title={el.title}
                  loading="lazy"
                  fetchPriority="high"
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
