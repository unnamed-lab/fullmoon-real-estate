import styles from "../../styles/css/app.module.css";
import agent01 from "../../assets/img/person01.png";
import agent02 from "../../assets/img/person02.png";
import agent03 from "../../assets/img/person03.png";
import agent04 from "../../assets/img/person04.jpg";

function Testimonial() {
  const testimonies = [
    {
      name: "Unnamed",
      title: "Manager",
      company: "Cypheir Ltd",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: agent01,
    },
    {
      name: "Kenya Soval",
      title: "Realtor",
      company: "Company Inc",
      quote:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: agent01,
    },
    {
      name: "Roy Bennett",
      title: "Manager",
      company: "Company Inc",
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, laudantium tenetur maxime, accusantium libero voluptatem similique natus aperiam tempora omnis aspernatur sequi animi, rem quod asperiores cum cupiditate ipsum aliquam! ",
      img: agent03,
    },
  ];
  return (
    <section className={styles.about_testimonial}>
      <h3>Testimonials</h3>
      <ul className={styles.testimony_gallery}>
        {testimonies?.map((el, index) => {
          return (
            <li key={index}>
              <span>
                <svg
                  width="30"
                  height="21"
                  viewBox="0 0 30 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.0625 0C14.3164 0 14.5361 0.0927734 14.7217 0.27832C14.9072 0.463867 15 0.683594 15 0.9375C15 1.19141 14.9072 1.41113 14.7217 1.59668C14.5361 1.78223 14.3164 1.875 14.0625 1.875C12.9297 1.875 11.8262 2.03125 10.752 2.34375C9.67773 2.65625 8.67676 3.0957 7.74902 3.66211C6.82129 4.22852 5.97656 4.91211 5.21484 5.71289C4.45312 6.51367 3.80859 7.40234 3.28125 8.37891C3.76953 8.10547 4.29199 7.89062 4.84863 7.73438C5.40527 7.57812 5.97656 7.5 6.5625 7.5C7.46094 7.5 8.31055 7.67578 9.11133 8.02734C9.91211 8.35938 10.6104 8.82324 11.2061 9.41895C11.8018 10.0146 12.2656 10.7129 12.5977 11.5137C12.9492 12.3145 13.125 13.1641 13.125 14.0625C13.125 14.9609 12.9492 15.8105 12.5977 16.6113C12.2656 17.4121 11.8018 18.1104 11.2061 18.7061C10.6104 19.3018 9.91211 19.7656 9.11133 20.0977C8.31055 20.4492 7.46094 20.625 6.5625 20.625C5.66406 20.625 4.81445 20.4492 4.01367 20.0977C3.21289 19.7656 2.51465 19.3018 1.91895 18.7061C1.32324 18.1104 0.859375 17.4121 0.527344 16.6113C0.175781 15.8105 0 14.9609 0 14.0625C0 12.1289 0.371094 10.3027 1.11328 8.58398C1.85547 6.88477 2.86133 5.40039 4.13086 4.13086C5.40039 2.86133 6.88477 1.85547 8.58398 1.11328C10.3027 0.371094 12.1289 0 14.0625 0ZM6.5625 18.75C7.85156 18.75 8.95508 18.291 9.87305 17.373C10.791 16.4551 11.25 15.3516 11.25 14.0625C11.25 12.7734 10.791 11.6699 9.87305 10.752C8.95508 9.83398 7.85156 9.375 6.5625 9.375C5.27344 9.375 4.16992 9.83398 3.25195 10.752C2.33398 11.6699 1.875 12.7734 1.875 14.0625C1.875 15.3516 2.33398 16.4551 3.25195 17.373C4.16992 18.291 5.27344 18.75 6.5625 18.75ZM29.0625 0C29.3164 0 29.5361 0.0927734 29.7217 0.27832C29.9072 0.463867 30 0.683594 30 0.9375C30 1.19141 29.9072 1.41113 29.7217 1.59668C29.5361 1.78223 29.3164 1.875 29.0625 1.875C27.9297 1.875 26.8262 2.03125 25.752 2.34375C24.6777 2.65625 23.6768 3.0957 22.749 3.66211C21.8213 4.22852 20.9766 4.91211 20.2148 5.71289C19.4531 6.51367 18.8086 7.40234 18.2812 8.37891C18.7695 8.10547 19.292 7.89062 19.8486 7.73438C20.4053 7.57812 20.9766 7.5 21.5625 7.5C22.4609 7.5 23.3105 7.67578 24.1113 8.02734C24.9121 8.35938 25.6104 8.82324 26.2061 9.41895C26.8018 10.0146 27.2656 10.7129 27.5977 11.5137C27.9492 12.3145 28.125 13.1641 28.125 14.0625C28.125 14.9609 27.9492 15.8105 27.5977 16.6113C27.2656 17.4121 26.8018 18.1104 26.2061 18.7061C25.6104 19.3018 24.9121 19.7656 24.1113 20.0977C23.3105 20.4492 22.4609 20.625 21.5625 20.625C20.6641 20.625 19.8145 20.4492 19.0137 20.0977C18.2129 19.7656 17.5146 19.3018 16.9189 18.7061C16.3232 18.1104 15.8594 17.4121 15.5273 16.6113C15.1758 15.8105 15 14.9609 15 14.0625C15 12.1289 15.3711 10.3027 16.1133 8.58398C16.8555 6.88477 17.8613 5.40039 19.1309 4.13086C20.4004 2.86133 21.8848 1.85547 23.584 1.11328C25.3027 0.371094 27.1289 0 29.0625 0ZM21.5625 18.75C22.8516 18.75 23.9551 18.291 24.873 17.373C25.791 16.4551 26.25 15.3516 26.25 14.0625C26.25 12.7734 25.791 11.6699 24.873 10.752C23.9551 9.83398 22.8516 9.375 21.5625 9.375C20.2734 9.375 19.1699 9.83398 18.252 10.752C17.334 11.6699 16.875 12.7734 16.875 14.0625C16.875 15.3516 17.334 16.4551 18.252 17.373C19.1699 18.291 20.2734 18.75 21.5625 18.75Z"
                    fill="#DD3333"
                  />
                </svg>
              </span>

              <div className={styles.testimonial_container}>
                <p className={styles.quote}>{el.quote}</p>
                <div className={styles.profile}>
                  <div className={styles.profile_img}>
                    <Image
                      src={el.img}
                      alt={el.name}
                      width={"150px"}
                      height={"150px"}
                      loading="lazy"
                      title={el.name}
                      fetchPriority="high"
                    />
                  </div>
                  <div className={styles.profile_info}>
                    <p>
                      by <b>{el.name}</b>
                    </p>
                    <p>
                      {el.title}, {el.company}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Testimonial;
