import React from "react";

// Creates a footer on the bottom right that displays current year
function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <footer>
        <div><p>&copy; Contact App {currentYear}</p></div>
    </footer>
    
  );
}

export default Footer;
