import React from "react";

function Contact(contact) {
  return (
    <div className="contact">
        <h1>{contact.name}</h1>
        <p>{contact.username}</p>
        <p>{contact.email}</p>
        <p>{contact.address}</p>
        <p>{contact.phone}</p>
        <p>{contact.website}</p>
        <p>{contact.company}</p>
    </div>
  );
}

export default Contact;
