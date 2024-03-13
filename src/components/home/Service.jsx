import { Link } from "react-router-dom";
import styles from "../../styles/css/app.module.css";

function Service() {
  const services = [
    {
      title: "Real Estate Consulting",
      url: "/service",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710313173/fullmoon-real-estate/service/service01_guj0js.png",
    },
    {
      title: "Real estate development",
      url: "/service",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710313188/fullmoon-real-estate/service/service02_de2bwk.png",
    },
    {
      title: "Real estate management",
      url: "/service",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710313228/fullmoon-real-estate/service/service03_eq9g3m.png",
    },
    {
      title: "Selling of land",
      url: "/service",
      img: "https://res.cloudinary.com/dbeh9dzsh/image/upload/v1710313199/fullmoon-real-estate/service/service04_dcfjjm.jpg",
    },
  ];
  return (
    <section className={styles.service_showcase}>
      <div className={styles.header}>
        <h3>Service</h3>
        <p>
          Welcome to Fullmoon Real Estate Properties, where we offer a
          comprehensive range of services tailored to meet your every real
          estate need. Whether you're buying, selling, renting, or investing,
          our dedicated team of professionals is here to guide you through every
          step of the process.
        </p>
        <button type="button" className="btn big secondary">
          More information
        </button>
      </div>
      <ul className={styles.gallery}>
        {services?.map((el, index) => {
          return (
            <li key={index}>
              <h4>{el.title}</h4>
              <div className={styles.more}>
                <Link to={el.url}>
                  More info
                  <span>
                    <svg
                      width="13"
                      height="15"
                      viewBox="0 0 13 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.26758 14.5688C1.01367 14.5688 0.796387 14.4785 0.615723 14.2979C0.435059 14.1172 0.339844 13.8999 0.330078 13.646V1.44385C0.339844 1.35596 0.354492 1.27295 0.374023 1.19482C0.393555 1.1167 0.422852 1.04346 0.461914 0.975098C0.520508 0.867676 0.598633 0.777344 0.696289 0.704102C0.793945 0.630859 0.90625 0.574707 1.0332 0.535645C1.07227 0.525879 1.11133 0.518555 1.15039 0.513672C1.18945 0.508789 1.22852 0.506348 1.26758 0.506348C1.35547 0.506348 1.43848 0.518555 1.5166 0.542969C1.59473 0.567383 1.66797 0.599121 1.73633 0.638184L12.5176 6.73193C12.5957 6.771 12.6641 6.82227 12.7227 6.88574C12.7812 6.94922 12.8301 7.02002 12.8691 7.09814C12.9277 7.20557 12.9644 7.31787 12.979 7.43506C12.9937 7.55225 12.9863 7.67432 12.957 7.80127C12.918 7.91846 12.8618 8.02344 12.7886 8.11621C12.7153 8.20898 12.625 8.28467 12.5176 8.34326L1.73633 14.4517C1.66797 14.4907 1.59717 14.52 1.52393 14.5396C1.45068 14.5591 1.37012 14.5688 1.28223 14.5688H1.26758ZM1.26758 13.646L12.0342 7.5376L1.26758 1.44385V13.646Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className={styles.blinder}></div>
              <img
                src={el.img}
                width={"200px"}
                height={"200px"}
                alt={el.title}
                title={el.title}
                loading="lazy"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Service;
