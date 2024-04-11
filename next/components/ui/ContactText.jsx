import React from "react";
import "../../styles/css/section/footer.css";
import { company } from '../../utils/team';

export default function ContactText() {
  return (
    <div className="contact_text">
      <h2>Get In Touch With Us</h2>
      <p>Phone number: {company.telephone}</p>
    </div>
  );
}
