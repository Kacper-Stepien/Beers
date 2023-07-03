import BeerCard from "../BeerCard/BeerCard";
import BeerModel from "../../models/Beer";

import classes from "./BeerList.module.scss";

type Props = {
  beers: BeerModel[];
};

const BeerList: React.FC<Props> = ({ beers }) => {
  return (
    <div className={classes.beers_container}>
      {beers.map((beer) => (
        <BeerCard beer={beer} key={beer.id} />
      ))}
    </div>
  );
};

export default BeerList;
