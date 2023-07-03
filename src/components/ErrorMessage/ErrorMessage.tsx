import { Link } from "react-router-dom";

import classes from "./ErrorMessage.module.scss";

type Props = {
  title: string;
  message: string;
};

const ErrorMessage: React.FC<Props> = ({ title, message }) => {
  return (
    <div className={classes.error}>
      <p className={classes.error_title}>{title}</p>
      <p className={classes.error_message}>{message}</p>
      <Link to="/" className={classes.error_link}>
        Return to main page
      </Link>
    </div>
  );
};

export default ErrorMessage;
