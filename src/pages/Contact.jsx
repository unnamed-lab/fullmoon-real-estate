import { Hero } from "../components/home";
import bgImg from "../assets/img/banner01.jpg";
import styles from "../styles/css/app.module.css";
import { InputField } from "../components/forms";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import MetaTags from "../components/seo/MetaTags";
import emailjs from "@emailjs/browser";
import { company } from "../utils/team";
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

function Contact() {
  const [setCustomNav] = useOutletContext();
  useEffect(() => {
    setCustomNav("");
  });
  return (
    <>
      <MetaTags
        title={"Contact Us Now - Fullmoon Real Estate"}
        desc={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque dicta ducimus aliquid, asperiores praesentium fugiat?"
        }
        index={false}
        follow={false}
      />
      <Hero bgImg={bgImg} customStyles={{ height: 40 + "dvh" }}>
        <h1
          style={{
            textTransform: "uppercase",
            fontSize: 1.875 + "rem",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          Contact Us
        </h1>
      </Hero>
      <ContactForm />
    </>
  );
}

function ContactForm() {
  const form = useRef(null);
  const [formData, setFormData] = useState({});
  const mailServiceID = import.meta.env.VITE_MAIL_SERVICE_ID;
  const mailTemplateID = import.meta.env.VITE_MAIL_TEMPLATE_ID;
  const mailPublicKey = import.meta.env.VITE_MAIL_PUBLIC_KEY;

  const onInputChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "terms" ? e.target.checked : e.target.value,
    });

  const sendEmail = (e) => {
    e.preventDefault();

    console.log(form.current);

    emailjs
      .sendForm(mailServiceID, mailTemplateID, form.current, {
        publicKey: mailPublicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast("Email has been sent successfully!")
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast("Email failed!");
        }
      );
  };

  return (
    <>
      <section className={styles.contact}>
        <ToastContainer />
        <form ref={form} onSubmit={sendEmail}>
          <input type="hidden" name="to_name" value={company.name} />
          <input type="hidden" name="to_email" value={company.email} />
          <div className={styles.name_group}>
            <InputField
              type={"text"}
              name={"user_fname"}
              honeypot={"firstname"}
              label={"First Name"}
              required={true}
              placeholder={"Enter your first name"}
              onChange={onInputChange}
              autoComplete={true}
              value={formData?.user_fname}
            />

            <InputField
              type={"text"}
              name={"user_lname"}
              honeypot={"lastname"}
              label={"Last Name"}
              required={true}
              placeholder={"Enter your last name"}
              onChange={onInputChange}
              autoComplete={true}
              value={formData?.user_lname}
            />
          </div>
          <InputField
            type={"email"}
            name={"user_email"}
            honeypot={"email"}
            label={"Email"}
            required={true}
            placeholder={"Email"}
            onChange={onInputChange}
            autoComplete={true}
            value={formData?.user_email}
          />
          <InputField
            type={"textarea"}
            name={"user_message"}
            honeypot={"message"}
            label={"Message"}
            required={true}
            placeholder={"Message"}
            onChange={onInputChange}
            value={formData?.user_message}
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
            data-sitekey="your_site_key"
            data-callback={sendEmail}
          >
            Submit
          </button>
        </form>
      </section>
    </>
  );
}

export default Contact;
