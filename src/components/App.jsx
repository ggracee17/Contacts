import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";
import contacts from "../contacts";

function createCard(contact) {
  return (<Contact
    key={contact.id} 
    name={contact.name} 
    username={contact.username}
    email={contact.email}
    address={contact.address.city}
    phone={contact.phone}
    website={contact.website}
    company={contact.company.name}
  />);
}

function App() {
  return (
    <div>
      <Header></Header>
      {contacts.map(createCard)}
      <Footer></Footer>
    </div>
    
  );
}

export default App;
