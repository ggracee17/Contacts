import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div><p>&copy; Contact App {currentYear}</p></div>
    </footer>
    
  );
}

export default Footer;
