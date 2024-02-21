import { Link } from "react-router-dom";
import styles from "../../styles/css/app.module.css";
import agent01 from "../../assets/img/person01.png";
import agent02 from "../../assets/img/person02.png";
import agent03 from "../../assets/img/person03.png";
import agent04 from "../../assets/img/person04.jpg";

function Agents() {
  const agents = [
    {
      name: "Vincent Fuller",
      title: "Real Estate Agent , Country House Real Estate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus porta justo eget risus consectetur...",
      url: "/",
      img: agent01,
    },
    {
      name: "Brittany Watkins",
      title: "Real Estate Agent , Country House Real Estate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus porta justo eget risus consectetur...",
      url: "/",
      img: agent02,
    },
    {
      name: "Michelle Ramirez",
      title: "Company Agent , Modern House Real Estate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus porta justo eget risus consectetur...",
      url: "/",
      img: agent03,
    },
    {
      name: "Samuel Palmer",
      title: "Real Estate Agent , Country House Real Estate",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Phasellus porta justo eget risus consectetur...",
      url: "/",
      img: agent04,
    },
  ];
  return (
    <section className={styles.find_agent}>
      <h2 className="section_header">Find real estate agents in your area</h2>
      <p className="section_desc">
        Lorem ipsum dolor sit amet, consectetur elium <span>Find an agent</span>
      </p>

      <div className={`${styles.agent_gallery} gallery_container`}>
        {agents?.map((el, index) => {
          return (
            <div key={index} className={styles.agent_card}>
              <div className={styles.thumbnail}>
                <img
                  src={el.img}
                  width={"150px"}
                  height={"150px"}
                  loading="lazy"
                  alt={el.name}
                  title={el.name}
                />
              </div>
              <div className={styles.details}>
                <h3>{el.name}</h3>
                <h4>{el.title}</h4>
                <p>{el.bio}</p>
                <Link to={el.url}>View Profile</Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Agents;
