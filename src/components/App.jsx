import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <Header></Header>
      <Contact name="name 1" username="username 1"></Contact>
      <Contact name="name 2" username="username 2"></Contact>
      <Contact name="name 3" username="username 2"></Contact>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
