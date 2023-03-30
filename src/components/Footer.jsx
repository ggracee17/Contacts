import React from "react";

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <p>&copy; Contact App {currentYear}</p>
    </footer>
    
  );
}

export default Footer;
