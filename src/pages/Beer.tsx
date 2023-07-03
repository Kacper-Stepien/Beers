import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import BeerModel from "../models/Beer";
import Wrapper from "../components/Wrapper/Wrapper";
import Header from "../components/PageHeader/PageHeader";
import BeerDetails from "../components/BeerDetails/BeerDetails";
import Footer from "../components/PageFooter/Footer";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const Beer: React.FC = () => {
  const { beerId: id } = useParams();

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [beer, setBeer] = useState<BeerModel | null>(null);
  const [error, setError] = useState<{ title: string; message: string }>({
    title: "",
    message: "",
  });

  const fetchBeer = async () => {
    try {
      const response = await fetch(`https://api.punkapi.com/v2/beers/${id}`);
      const data = await response.json();
      if (!data.error && data.length > 0) {
        setBeer(data[0]);
      } else if (data.statusCode === 404 || data.statusCode === 400) {
        setError({
          title: "Beer not found",
          message: "There is no beer with this ID",
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setError({
        title: "Something went wrong",
        message: "Please try again later",
      });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchBeer();
  }, []);

  return (
    <Wrapper>
      <Header title="Beers" />
      {isLoading && <LoadingSpinner />}
      {!isLoading && beer && <BeerDetails beer={beer} />}
      {!isLoading && !beer && (
        <ErrorMessage title={error.title} message={error.message} />
      )}
      <Footer />
    </Wrapper>
  );
};

export default Beer;
