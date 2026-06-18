import React from "react";
import "./Contact.css";
import { useRef, useState } from "react";
import { sendEmail } from "../services/email";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {

  const form = useRef();

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      await sendEmail(form.current);

      setMessage("✅ Message sent successfully!");

      form.current.reset();

  } catch (error) {
  console.error("EmailJS Error:", error);
  console.error("Status:", error.status);
  console.error("Text:", error.text);

  setMessage(`❌ ${error.text || "Failed to send message."}`);
}

    setLoading(false);

  };

  return (

<section className="contact reveal" id="contact">

<div className="section-header">

<p>Let's Connect</p>

<h2>Contact Me</h2>

</div>

<div className="contact-container">

<div className="contact-info">

<div className="contact-card">

<FaEnvelope/>

<div>

<h3>Email</h3>

<p>naveennaveengoud10@gmail.com</p>

</div>

</div>

<div className="contact-card">

<FaPhoneAlt/>

<div>

<h3>Phone</h3>

<p>+91 8639868030</p>

</div>

</div>

<div className="contact-card">

<FaMapMarkerAlt/>

<div>

<h3>Location</h3>

<p>Nandyal, Andhra Pradesh, India</p>

</div>

</div>

<div className="social-links">

<a
href="https://github.com/Naveen0987"
target="_blank"
rel="noreferrer"
>

<FaGithub/>

</a>

<a
href="https://www.linkedin.com/in/naveen-ch-705965240/"
target="_blank"
rel="noreferrer"
>

<FaLinkedin/>

</a>

</div>

</div>

<form
ref={form}
className="contact-form"
onSubmit={handleSubmit}
>

<input
type="text"
name="user_name"
placeholder="Your Name"
required
/>

<input
type="email"
name="user_email"
placeholder="Your Email"
required
/>

<textarea
name="message"
rows="6"
placeholder="Your Message"
required
/>

<button type="submit">

{loading ? "Sending..." : "Send Message"}

</button>

<p>{message}</p>

</form>

</div>

</section>

  );

};

export default Contact;
