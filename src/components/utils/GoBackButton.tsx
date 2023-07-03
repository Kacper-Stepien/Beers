import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import classes from "./GoBackButton.module.scss";

const GoBackButton = () => {
  const navigate = useNavigate();

  const redirectToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <button onClick={redirectToPreviousPage} className={classes.button}>
      <IoIosArrowBack />
    </button>
  );
};

export default GoBackButton;
