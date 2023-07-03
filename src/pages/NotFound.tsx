import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./NotFound.module.scss";

const NotFound = () => {
  const [seconds, setSeconds] = useState<number>(5);
  const navigate = useNavigate();

  const redirectToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 1) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        redirectToHomePage();
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [seconds]);

  return (
    <div className={classes.notFound}>
      <h1 className={classes.notFound_header}>404</h1>
      <p className={classes.notFound_message}>Page not found</p>
      <p className={classes.notFound_message__redirection}>
        You will be redirected to the home page in <span>{seconds}</span>{" "}
        seconds
      </p>
    </div>
  );
};

export default NotFound;
