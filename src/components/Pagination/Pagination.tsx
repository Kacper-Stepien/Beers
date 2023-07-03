import { Link } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import classes from "./Pagination.module.scss";

type Props = {
  currentPage: number;
  moreBeers: boolean;
};

const Pagination: React.FC<Props> = ({ currentPage, moreBeers }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={classes.pagination}>
      <Link
        to={`/?page=${currentPage - 1}`}
        onClick={scrollToTop}
        className={
          currentPage === 1
            ? `${classes.pagination_button} ${classes.pagination_button__disabled}`
            : classes.pagination_button
        }
      >
        <IoIosArrowBack />
      </Link>

      <div className={classes.pagination_current}>{currentPage}</div>

      <Link
        to={`/?page=${currentPage + 1}`}
        onClick={scrollToTop}
        className={
          !moreBeers
            ? `${classes.pagination_button} ${classes.pagination_button__disabled}`
            : classes.pagination_button
        }
      >
        <IoIosArrowForward />
      </Link>
    </div>
  );
};
export default Pagination;
