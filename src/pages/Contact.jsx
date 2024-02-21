import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import styles from "../styles/css/app.module.css";
import { InputField } from "../components/forms";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";

function Contact() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
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
  const [formData, setFormData] = useState({});

  const onInputChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "terms" ? e.target.checked : e.target.value,
    });
  return (
    <section className={styles.contact}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className={styles.name_group}>
          <InputField
            type={"text"}
            name={"fname"}
            label={"First Name"}
            required={true}
            placeholder={"Enter your first name"}
            onChange={onInputChange}
          />

          <InputField
            type={"text"}
            name={"lname"}
            label={"Last Name"}
            required={true}
            placeholder={"Enter your last name"}
            onChange={onInputChange}
          />
        </div>
        <InputField
          type={"email"}
          name={"email"}
          label={"Email"}
          required={true}
          placeholder={"Email"}
          onChange={onInputChange}
        />
        <InputField
          type={"textarea"}
          name={"message"}
          label={"Message"}
          required={true}
          placeholder={"Message"}
          onChange={onInputChange}
        />
        <InputField
          type={"checkbox"}
          name={"terms"}
          label={"GDPR AGREEMENT "}
          required={true}
          placeholder={
            "I consent to having this website store my submitted information"
          }
          onChange={onInputChange}
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
      </form>
    </section>
  );
}

export default Contact;
