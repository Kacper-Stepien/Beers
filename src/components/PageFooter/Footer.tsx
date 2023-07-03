import React from "react";
import { FaGithub, FaFacebook } from "react-icons/fa";

import classes from "./PageFooter.module.scss";

const PageFooter: React.FC = React.memo(() => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_element}>
        <p className={classes.footer_element__title}>Author</p>
        <p className={classes.footer_element__content}>Kacper Stępień</p>
        <div className={classes.footer_element__icons}>
          <a
            href="https://github.com/Kacper-Stepien"
            target="_blank"
            className={classes.footer_element__icon}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/kacper.stepien.509/"
            target="_blank"
            className={classes.footer_element__icon}
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
});

export default PageFooter;
