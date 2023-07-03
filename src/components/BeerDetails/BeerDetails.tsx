import BeerModel from "../../models/Beer";

import BeerAttribute from "./BeerAttribute";
import BeerIngredients from "./BeerIngredients";
import GoBackButton from "../utils/GoBackButton";

import classes from "./BeerDetails.module.scss";

type Props = {
  beer: BeerModel;
};

const BeerDetails: React.FC<Props> = ({ beer }) => {
  return (
    <div className={classes.beer_details}>
      <div className={classes.beer_details__column}>
        <img
          src={beer.image_url ? beer.image_url : "/src/assets/no_image.png"}
          alt={beer.name}
        />
      </div>

      <div className={classes.beer_details__column}>
        <div className={classes.beer_details__name}>{beer.name}</div>
        <div className={classes.beer_details__description}>
          {beer.description}
        </div>
        <div className={classes.beer_details__element}>
          <div className={classes.beer_details__element__label}>Tagilne</div>
          <div className={classes.beer_details__element__value}>
            {beer.tagline}
          </div>
        </div>
        <div className={classes.beer_details__element}>
          <div className={classes.beer_details__element__label}>
            First Brewed
          </div>
          <div className={classes.beer_details__element__value}>
            {beer.first_brewed}
          </div>
        </div>
        <div className={classes.beer_details__elements}>
          {beer.abv && <BeerAttribute label="ABV" value={beer.abv} />}
          {beer.ibu && <BeerAttribute label="IBS" value={beer.ibu} />}
          {beer.ebc && <BeerAttribute label="EBC" value={beer.ebc} />}
          {beer.attenuation_level && (
            <BeerAttribute label="Att" value={beer.attenuation_level} />
          )}
        </div>
        <BeerIngredients title="Ingredients" ingredients={beer.ingredients} />
      </div>
      <GoBackButton />
    </div>
  );
};

export default BeerDetails;
