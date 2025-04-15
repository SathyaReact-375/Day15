import React from "react";

function Contact() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Contact Us</h1>
      <p>We would love to hear from you! Reach out to us anytime.</p>
      <form>
        <label>
          Name: <input type="text" placeholder="Enter your name" />
        </label>
        <br />
        <label>
          Email: <input type="email" placeholder="Enter your email" />
        </label>
        <br />
        <label>
          Message: <textarea placeholder="Your message"></textarea>
        </label>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;