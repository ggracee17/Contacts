import React from "react";

function Contact(contact) {
  return (
    <div className="contact">
        <h1>{contact.name}</h1>
        <p>@{contact.username}</p>
    </div>
  );
}

export default Contact;
