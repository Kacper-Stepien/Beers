import { useNavigate } from "react-router-dom";
import { BsFillDiamondFill } from "react-icons/bs";

import BeerModel from "../../models/Beer";

import classes from "./BeerCard.module.scss";

type Props = {
  beer: BeerModel;
};

const BeerCard: React.FC<Props> = ({ beer }) => {
  const navigate = useNavigate();
  const redirectToBeerDetailsPage = () => {
    navigate(`/details/${beer.id}`);
  };

  return (
    <div className={classes.beer_card} onClick={redirectToBeerDetailsPage}>
      <img
        className={classes.beer_card__image}
        src={beer.image_url || "/src/assets/no_image.png"}
        alt={beer.name}
      />
      <div className={classes.beer_card__name}>{beer.name}</div>
      <div className={classes.beer_card__icon}>
        <BsFillDiamondFill />
      </div>
      <div className={classes.beer_card__tagline}>{beer.tagline}</div>
    </div>
  );
};

export default BeerCard;
