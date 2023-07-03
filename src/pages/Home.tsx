import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import usePagination from "../hooks/usePagination";
import BeerModel from "../models/Beer";

import Header from "../components/PageHeader/PageHeader";
import BeerList from "../components/BeerList/BeerList";
import Pagination from "../components/Pagination/Pagination";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import Wrapper from "../components/Wrapper/Wrapper";
import Footer from "../components/PageFooter/Footer";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const Home: React.FC = () => {
  const [searchParams] = useSearchParams();
  const perPage = 12;

  const [beers, setBeers] = useState<BeerModel[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<{
    show: boolean;
    title: string;
    message: string;
  }>({
    show: false,
    title: "",
    message: "",
  });

  const { currentPage, hasNextPage: moreBeers } = usePagination(
    searchParams,
    perPage
  );

  const fetchBeers = async () => {
    try {
      const response = await fetch(
        `https://api.punkapi.com/v2/beers?page=${currentPage}&per_page=12`
      );
      const data = await response.json();
      if (!data.error && data.length > 0) {
        setBeers(data);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setError({
        show: true,
        title: "Something went wrong",
        message: "Please try again",
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true); // I could remove this to prevent re-rendering, but I want to show the loading spinner
    fetchBeers();
  }, [currentPage]);

  return (
    <Wrapper>
      <Header title="Beers" />
      {isLoading && <LoadingSpinner />}
      {!isLoading && !error.show && beers && <BeerList beers={beers} />}
      {!isLoading && !error.show && (
        <Pagination currentPage={currentPage} moreBeers={moreBeers} />
      )}
      {!isLoading && error.show && (
        <ErrorMessage title={error.title} message={error.message} />
      )}
      <Footer />
    </Wrapper>
  );
};

export default Home;
