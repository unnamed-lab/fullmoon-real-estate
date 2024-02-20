import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import styles from "../styles/css/app.module.css";
import { InputField } from "../components/forms";

function Contact() {
  return (
    <>
      <Hero bgImg={bgImg} customStyles={{ height: 40 + "dvh" }}>
        <h3 style={{ textTransform: "uppercase" }}>Contact Us</h3>
      </Hero>
      <ContactForm />
    </>
  );
}

function ContactForm() {
  return (
    <section className={styles.contact}>
      <div className={styles.name_group}>
        <InputField
          type={"text"}
          name={"fname"}
          label={"First Name"}
          required={true}
          placeholder={"Enter your first name"}
        />

        <InputField
          type={"text"}
          name={"lname"}
          label={"Last Name"}
          required={true}
          placeholder={"Enter your last name"}
        />
      </div>
      <InputField
        type={"email"}
        name={"email"}
        label={"Email"}
        required={true}
        placeholder={"Email"}
      />
      <InputField
        type={"textarea"}
        name={"message"}
        label={"Message"}
        required={true}
        placeholder={"Message"}
      />
      <InputField
        type={"checkbox"}
        name={"terms"}
        label={"GDPR AGREEMENT "}
        required={true}
        placeholder={
          "I consent to having this website store my submitted information"
        }
        customStyles={{ display: "flex", alignItems: "center" }}
      />
      <button
        type="submit"
        className="btn big secondary"
        style={{
          width: 100 + "%",
          fontSize: 1.875 + "rem",
          padding: 1.75 + "rem",
          fontWeight: 400,
          textTransform: "uppercase",
        }}
      >
        Submit
      </button>
    </section>
  );
}

export default Contact;
