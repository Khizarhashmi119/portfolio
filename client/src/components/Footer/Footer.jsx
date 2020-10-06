import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="container">
        <p>
          <span className="copyright">&copy;</span> Copyright {currentYear}{" "}
          Mohd. Khizar Hashmi.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
