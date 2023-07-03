import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const usePagination = (searchParams: URLSearchParams, perPage: number) => {
  const navigate = useNavigate();

  let paramPage = Number(searchParams.get("page"));
  const totalPages = Math.ceil(325 / perPage);

  if (!paramPage || paramPage < 1) {
    paramPage = 1;
  } else if (paramPage > totalPages) {
    paramPage = totalPages;
  }

  const [currentPage, setCurrentPage] = useState(paramPage || 1);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    paramPage = Number(searchParams.get("page"));
    if (!paramPage || paramPage < 1) {
      paramPage = 1;
      setHasNextPage(true);
      navigate(`?page=${paramPage}`);
    } else if (paramPage > totalPages) {
      paramPage = 28;
      setHasNextPage(false);
      navigate(`?page=${paramPage}`);
    } else if (paramPage === totalPages) {
      setHasNextPage(false);
      setCurrentPage(paramPage);
    } else {
      setHasNextPage(true);
      setCurrentPage(paramPage);
    }
  }, [searchParams]);

  return {
    currentPage,
    setCurrentPage,
    hasNextPage,
    setHasNextPage,
  };
};

export default usePagination;
