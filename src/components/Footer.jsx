import React from 'react';
import '../styles/components/Footer.css';

const Footer = () => {
  return (
    <>
      <footer>
        <section className="section--icons" id="socialNetwork">
          <a
            href="https://github.com/jesmoo"
            alt="Github"
            title="Follow me on Github"
          >
            <span className="icons--item github"></span>
          </a>
          <a
            href="https://www.linkedin.com/in/jesmoo/"
            alt="Linkedin"
            title="Follow me on Linkedin"
          >
            <span className="icons--item linkedin"></span>
          </a>
          <a
            href="https://twitter.com/Jesmoo"
            alt="Twitter"
            title="Follow me on Twitter"
          >
            <span className="icons--item twitter"></span>
          </a>
          <a
            href="https://www.instagram.com/_jesmoo/"
            alt="Instagram"
            title="Follow me on Instagram"
          >
            <span className="icons--item instagram"></span>
          </a>
        </section>
        <section className="section--email">
          <h3>habidmoo@gmail.com</h3>
        </section>
      </footer>
    </>
  );
};

export default Footer;
