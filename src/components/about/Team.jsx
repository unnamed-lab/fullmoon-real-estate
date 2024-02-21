import styles from "../../styles/css/app.module.css";
import agent01 from "../../assets/img/person01.png";
import agent02 from "../../assets/img/person02.png";
import agent03 from "../../assets/img/person03.png";
import agent04 from "../../assets/img/person04.jpg";

function Team() {
  const team = [
    {
      name: "Kathleen Grant",
      title: "Funder",
      img: agent01,
    },
    {
      name: "Keith Bailey",
      title: "CEO",
      img: agent02,
    },
    {
      name: "Danielle Murray",
      title: "Manager",
      img: agent03,
    },
    {
      name: "Thomas Stevens",
      title: "CTO",
      img: agent04,
    },
  ];
  return (
    <section className={styles.about_team}>
      <h3>Meet our team</h3>
      <ul className={styles.about_team_gallery}>
        {team?.map((el, index) => {
          return (
            <li key={index}>
              <div className={styles.detail}>
                <h4>{el.name}</h4>
                <h5>{el.title}</h5>
              </div>
              <img
                src={el.img}
                width={"260px"}
                height={"390px"}
                alt={el.name}
                title={el.name}
                loading="lazy"
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Team;
